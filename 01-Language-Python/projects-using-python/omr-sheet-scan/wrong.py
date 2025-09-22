import cv2
import numpy as np

# ====== CONFIG ======
image_path = "yes.jpg"

# Example correct answers (index 0 = Q1, index 1 = Q2, ...)
correct_answers = ["B", "D", "A", "C", "E"]  

# Mapping of detected bubble order → Answer label
# ⚠️ This depends on layout (sorted left→right for each row of circles)
answer_labels = ["A", "B", "C", "D", "E"]  

# ====== FUNCTIONS ======
def detect_filled_circles(image_path):
    img = cv2.imread(image_path)
    if img is None:
        raise FileNotFoundError(f"Image not found: {image_path}")

    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    gray = cv2.medianBlur(gray, 5)

    circles = cv2.HoughCircles(
        gray, cv2.HOUGH_GRADIENT,
        dp=1, minDist=30,
        param1=50, param2=30,
        minRadius=10, maxRadius=20
    )

    results = []
    if circles is not None:
        circles = np.uint16(np.around(circles))
        for (x, y, r) in circles[0, :]:
            y1, y2 = max(y - r, 0), min(y + r, gray.shape[0])
            x1, x2 = max(x - r, 0), min(x + r, gray.shape[1])
            roi = gray[y1:y2, x1:x2]

            if roi.size == 0:
                continue

            _, roi_thresh = cv2.threshold(roi, 128, 255, cv2.THRESH_BINARY_INV)
            filled_ratio = cv2.countNonZero(roi_thresh) / (roi.shape[0] * roi.shape[1])

            if filled_ratio > 0.35:  # Threshold
                results.append((x, y, r))

    return img, results


def group_questions(filled_circles, per_question=5):
    """
    Sort bubbles top→down, left→right and group into questions.
    Assumes neat exam sheet layout.
    """
    # Sort by Y first (rows), then X (columns)
    filled_circles = sorted(filled_circles, key=lambda c: (c[1], c[0]))

    # Split into groups of N (A,B,C,D,E)
    questions = [
        filled_circles[i:i + per_question]
        for i in range(0, len(filled_circles), per_question)
    ]
    return questions


def evaluate(questions, correct_answers):
    wrong_count = 0
    results = []

    for q_index, bubbles in enumerate(questions):
        # Sort left→right
        bubbles = sorted(bubbles, key=lambda c: c[0])

        chosen = []
        for idx, (x, y, r) in enumerate(bubbles):
            chosen.append(answer_labels[idx])

        # For now assume only one marked per Q
        detected_answer = chosen[0] if chosen else None
        correct = correct_answers[q_index] if q_index < len(correct_answers) else None

        if detected_answer == correct:
            results.append((q_index+1, detected_answer, "Correct"))
        else:
            results.append((q_index+1, detected_answer, f"Wrong → {correct}"))
            wrong_count += 1

    return results, wrong_count


# ====== MAIN ======
if __name__ == "__main__":
    img, filled_circles = detect_filled_circles(image_path)

    questions = group_questions(filled_circles, per_question=5)
    evaluation, wrong_count = evaluate(questions, correct_answers)

    for q_num, ans, status in evaluation:
        print(f"Q{q_num}: {ans} → {status}")

    print(f"\nTotal Wrong Answers: {wrong_count}")

    # Optional: visualize results
    for (x, y, r) in filled_circles:
        cv2.circle(img, (x, y), r, (0, 255, 0), 2)

    cv2.imshow("Evaluated Sheet", img)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
