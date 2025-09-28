people = [
    {"name": "Keya", "gender": "Female"},
    {"name": "Kamal", "gender": "Male"},
    {"name": "Nadia", "gender": "Female"},
    {"name": "Jamal", "gender": "Male"},
]

for person in people:
    if person["gender"].lower() == "male":
        print(person["name"], "is Male")
    elif person["gender"].lower() == "female":
        print(person["name"], "is Female")
