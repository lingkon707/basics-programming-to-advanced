import cv2
import numpy as np

# Load image
img = cv2.imread("yes.jpg")
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
gray = cv2.medianBlur(gray, 5)

# Detect circles
circles = cv2.HoughCircles(
    gray, 
    cv2.HOUGH_GRADIENT, 
    dp=1, minDist=30,
    param1=50, param2=30,
    minRadius=10, maxRadius=20
)

results = []

if circles is not None:
    circles = np.uint16(np.around(circles))
    for i in circles[0, :]:
        x, y, r = i
        roi = gray[y-r:y+r, x-r:x+r]

        # Convert to black & white inside circle
        _, roi_thresh = cv2.threshold(roi, 128, 255, cv2.THRESH_BINARY_INV)

        # Count darkness (how much is filled)
        filled_ratio = cv2.countNonZero(roi_thresh) / (roi.shape[0]*roi.shape[1])

        # Keep only "filled" circles (adjust threshold if needed)
        if filled_ratio > 0.35:   # << tweak this number if too strict/loose
            results.append((x, y))
            cv2.circle(img, (x, y), r, (0, 255, 0), 2)   # mark filled ones only

print("Filled circles:", results)

cv2.imshow("Filled Options", img)
cv2.waitKey(0)
cv2.destroyAllWindows()
