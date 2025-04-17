import json

def save_data(data, filename="data.json"):
    """Save data to a JSON file."""
    with open(filename, "w") as file:
        json.dump(data, file, indent=4)

def load_data(filename="data.json"):
    """Load data from a JSON file."""
    try:
        with open(filename, "r") as file:
            return json.load(file)
    except FileNotFoundError:
        return []

def add_entry(data):
    """Add a new entry."""
    title = input("Enter title: ")
    price = input("Enter price: ")
    advantages = input("Enter advantages (comma-separated): ").split(',')
    disadvantages = input("Enter disadvantages (comma-separated): ").split(',')
    
    playstation = input("Available on PlayStation (yes/no): ").strip().lower() == "yes"
    pc = input("Available on PC (yes/no): ").strip().lower() == "yes"
    xbox = input("Available on Xbox (yes/no): ").strip().lower() == "yes"

    entry = {
        "title": title,
        "price": price,
        "advantages": [adv.strip() for adv in advantages],
        "disadvantages": [dis.strip() for dis in disadvantages],
        "playstation": playstation,
        "pc": pc,
        "xbox": xbox
    }
    data.append(entry)
    print("Entry added successfully!")

def view_entries(data):
    """View all entries."""
    if not data:
        print("No entries found.")
        return

    for idx, entry in enumerate(data, 1):
        print(f"\nEntry {idx}:\n")
        print(f"Title: {entry['title']}")
        print(f"Price: {entry['price']}")
        print("Advantages:")
        for adv in entry['advantages']:
            print(f"  - {adv}")
        print("Disadvantages:")
        for dis in entry['disadvantages']:
            print(f"  - {dis}")
        print(f"Available on PlayStation: {'Yes' if entry['playstation'] else 'No'}")
        print(f"Available on PC: {'Yes' if entry['pc'] else 'No'}")
        print(f"Available on Xbox: {'Yes' if entry['xbox'] else 'No'}")

def main():
    filename = "data.json"
    data = load_data(filename)

    while True:
        print("\nMenu:")
        print("1. Add Entry")
        print("2. View Entries")
        print("3. Exit")
        choice = input("Choose an option: ")

        if choice == "1":
            add_entry(data)
            save_data(data, filename)
        elif choice == "2":
            view_entries(data)
        elif choice == "3":
            print("Goodbye!")
            break
        else:
            print("Invalid option. Please try again.")

if __name__ == "__main__":
    main()
