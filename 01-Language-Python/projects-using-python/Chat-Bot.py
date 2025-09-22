import random

# Greetings list (Bangladesh/Muslim-friendly, single words)
greetings = [
    "Hi","bro", "hello", "brother","Bondhu", "Bhai", "Bon", "Dost",  "Vai", 
    "Apa", "Sir", "Madam", "Ustad", "Imam", "Hafez", "Mufti", "Sheikh", 
    "Alhamdulillah", "Mashallah", "Subhanallah", "Inshallah", "Bismillah", 
  
    "Amin", "Peace", "Blessings", "Faith", "Hope", "Light", "Friend", 
    "Brother", "Sister","yes", "no", 
]

# Technology keywords and responses (full sentences)
technology = {
    "python": "Python is great for beginners and very powerful for AI projects.",
    "java": "Java is reliable and widely used for enterprise applications.",
    "javascript": "JavaScript makes websites interactive and dynamic.",
    "typescript": "TypeScript helps write safer, bug-free JavaScript code.",
    "html": "HTML is the structure of every web page.",
    "css": "CSS styles web pages to make them visually appealing.",
    "react": "React allows you to build fast and modern frontend apps.",
    "nextjs": "Next.js enables server-side rendering with React for full-stack apps.",
    "nodejs": "Node.js runs JavaScript on the server for backend development.",
    "mongodb": "MongoDB is a popular NoSQL database for flexible data storage.",
    "fine": " i am fine also. How can i help you?"

}

# Default fallback responses if no match found
default_responses = [
    "Sorry, I don't understand that. You can try saying 'CSS' or 'JS'.",
    "I couldn't find a match, maybe try asking about Python or JavaScript.",
    "Hmm, I’m not sure. You could try a technology keyword like HTML or CSS.",
    "I don’t recognize that. Try greetings like 'AssalamuAlaikum'.",
    "Sorry, I didn't get that. You can ask about React or NodeJS.",
    "I’m confused! Perhaps ask about MongoDB or Python.",
    "That’s new to me. Try saying 'html' or 'css'.",
    "I can't understand, maybe use a tech keyword like NextJS or TypeScript.",
    "I didn’t catch that. Try 'Hi', 'Bondhu', or a programming language.",
    "Sorry, I’m not sure what that means. You can try a greeting or tech name."

]

# Function to handle chatbot response
def chatbot_response(user_input):
    user_input_lower = user_input.lower()

    # Check greetings
    if any(greeting.lower() in user_input_lower for greeting in greetings):
        # Return a full sentence response for greetings
        return random.choice([
          ""
            "Hi ! Let's Talk ",
            " Hello, It`s nice to chat with you.",
            " Do you wanna talk with me ?"
         
        ])

    # Check technology keywords
    for tech, reply in technology.items():
        if tech in user_input_lower:
            return reply

    # Default response with suggestion
    return random.choice(default_responses)

# Main loop
def chat():
    print("Chatbot: Type 'quit' to exit.")
    while True:
        user_input = input("You: ")
        if user_input.lower() == "quit":
            print("Chatbot: Goodbye!")
            break
        response = chatbot_response(user_input)
        print(f"Chatbot: {response}")

# Run chatbot
if __name__ == "__main__":
    chat()
