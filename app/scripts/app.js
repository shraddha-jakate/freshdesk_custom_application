var client;

init();

async function init() {
  client = await app.initialized();
  client.events.on("app.activated", renderText);
}

async function renderText() {
  console.log("saff")
  try {
    // Get values from input fields
    const subject = document.getElementById("subjectInput").value;
    const description_text = document.getElementById("description_textInput").value;
    const sender_email = document.getElementById("sender_emailInput").value;

    console.log("Subject:", subject);
    console.log("Description_text:", description_text);
    console.log("Sender_email:", sender_email);
  } catch (error) {
    console.log(error);
  }
}

async function createTicket() {
  console.log("hii");
  try {
    // Get values from input fields
   
    const subject = document.getElementById("subject").value;
    const description_text = document.getElementById("description").value;
    const sender_email = document.getElementById("email").value;

    console.log("Subject:", subject);
    console.log("Description_text:", description_text);
    console.log("Sender_email:", sender_email);

    // Perform actions to create a new ticket with the input values
    let data = await client.request.invokeTemplate("getticket", {
      context: {},
      body: JSON.stringify({
        subject: subject,
        description: description_text,
        email: sender_email,
      }),
    });
    console.log(data);
  } catch (error) {
    console.log("error", error);
  }
}