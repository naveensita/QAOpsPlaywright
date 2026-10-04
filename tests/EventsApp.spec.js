const {test,expect} =require('@playwright/test');

test("Create Event then book an event and verify the count.", async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();

    const eventTitle = "QA AI Summit";
    const seatCOunt = "400";

    const emailTextBox = page.getByPlaceholder("you@email.com");
    const passwordTextBox = page.getByLabel("password");
    const signInBtn = page.getByRole("button", {name : "Sign In"});
    const browseEventsLink = page.locator("a[href='/events'] span");
    const adminBtn = page.getByRole("button",{name:"Admin"});
    const manageEventsLink = page.locator("div.absolute a[href='/admin/events']");
    const manageBookingLink = page.locator("div.absolute a[href='/admin/bookings']");
    const eventTitleTextBox = page.locator("#event-title-input");
    const description = page.getByPlaceholder("Describe the event…");
    const category = page.locator("#category");
    const city = page.getByLabel("City");
    const venue = page.getByLabel("Venue");
    const dateAndTime = page.getByLabel("Event Date & Time");
    const price = page.getByLabel("Price ($)");
    const totalSeats = page.getByLabel("Total Seats");
    const image = page.getByLabel("Image URL (optional)");
    const addEventBtn = page.locator("#add-event-btn");

    await page.goto("https://eventhub.rahulshettyacademy.com");
    await emailTextBox.fill("naveenpathak28@gmail.com");
    await passwordTextBox.fill("Sonu123@#");
    await signInBtn.click();
    await browseEventsLink.waitFor();

    expect(browseEventsLink).toBeVisible();
    expect(browseEventsLink).toHaveText("Browse Events →");
    await adminBtn.click();
    await manageEventsLink.waitFor();
    await manageEventsLink.click();

    await eventTitleTextBox.fill(eventTitle);
    await description.fill("AI event for experienced candidates");
    await category.selectOption("Workshop");
    await city.fill("Bengaluru");
    await venue.fill("Hotel Leela, old airport road");
    await dateAndTime.fill('2027-12-31T10:00');

    await price.fill("1000");
    await totalSeats.fill(seatCOunt);
    await addEventBtn.click();
    






    //await page.pause();

});