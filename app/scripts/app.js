var client;

init();

async function init() {
  client = await app.initialized();
  client.events.on("app.activated", renderText);
}
let ticketSubject;
let ticketDescription_text;
let ticketsender_email;
async function renderText() {
  try {
    const data = await client.data.get("ticket");
    const ticketInfo = data.ticket;
    console.log("ticketInfo", ticketInfo);
    // Extract ticket information
    ticketSubject = ticketInfo.subject;
    ticketDescription_text = ticketInfo.description_text;
    ticketsender_email = ticketInfo.sender_email;

    document.getElementById("ticket-subject").textContent = ticketSubject;
    document.getElementById("ticket-description_text").textContent =ticketDescription_text;
    document.getElementById("ticket-sender_email").textContent = ticketsender_email;

    console.log("Ticket Subject:", ticketSubject);
    console.log("Ticket Description_text:", ticketDescription_text);
    console.log("Ticket sender_email :", ticketsender_email);
  } catch (error) {
    console.log(error);
  }
}

async function create() {
  console.log("hii");
  try {
    let data = await client.request.invokeTemplate("getticket", {
      context: {},
      body: JSON.stringify({
        subject: ticketSubject,
        description:ticketDescription_text,
        email:ticketsender_email,
      }),
    });
    console.log(data);
  } catch (error) {
    console.log("error", error);
  }
}
