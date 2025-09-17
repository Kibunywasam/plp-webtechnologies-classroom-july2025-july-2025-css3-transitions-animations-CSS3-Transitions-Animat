
//  PART 2: JavaScript Functions — Scope, Parameters & Return


 /* Demonstrates function scope, parameters, and return values */
function demoFunctions() {
  console.log("===  FUNCTION DEMO: SCOPE, PARAMETERS, RETURN ===");

  // Global variable
  const globalMessage = "I'm global!";

  // Function with parameters and return
  function addNumbers(a, b) {
    return a + b; // returns sum
  }

  // Local scope example
  function demonstrateScope() {
    const localMessage = "I'm local!";
    console.log("Inside function:");
    console.log("Global:", globalMessage); //  accessible
    console.log("Local:", localMessage);   //  accessible
  }

  // Function that returns an object
  function createUser(name, age) {
    return {
      name: name,
      age: age,
      greet() {
        return `Hello, I'm ${this.name}, ${this.age} years old.`;
      }
    };
  }

  // Run demos
  console.log("Sum of 5 + 3 =", addNumbers(5, 3));
  demonstrateScope();
  const user = createUser("Alice", 28);
  console.log(user.greet());

  console.log(" Function demo complete. Check output above.");
}

// PART 3: Combining CSS Animations with JavaScript


// Animate Box on Click
document.getElementById("animateBoxBtn").addEventListener("click", function() {
  const box = document.getElementById("animatedBox");
  box.classList.add("animate");

  // Remove animation after it ends to allow re-triggering
  box.addEventListener("animationend", function handler() {
    box.classList.remove("animate");
    box.removeEventListener("animationend", handler);
  }, { once: true });
});

// Flip Card on Click
document.getElementById("toggleCardBtn").addEventListener("click", function() {
  const card = document.getElementById("flipCard");
  card.classList.toggle("flipped");
});

// Modal Show/Hide
const modal = document.getElementById("modal");
const toggleModalBtn = document.getElementById("toggleModalBtn");
const closeModalBtn = document.getElementById("closeModal");

function toggleModal() {
  modal.classList.toggle("show");
}

toggleModalBtn.addEventListener("click", toggleModal);
closeModalBtn.addEventListener("click", toggleModal);

// Close modal if clicked outside content
modal.addEventListener("click", function(e) {
  if (e.target === modal) {
    toggleModal();
  }
});

console.log(" Script loaded. Interact with buttons to trigger animations!");