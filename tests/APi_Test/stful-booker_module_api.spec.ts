import { log } from "console";
import { test } from "../../MesFixtures/CrypteDecripte";
import { expect } from "@playwright/test";

test("API teste", async ({ request }) => {
    const booking = await request.get("https://restful-booker.herokuapp.com/booking")
  
   console.log(await booking.json());
   
  });
  test("API teste 2", async ({ request }) => {
    const bookindetail2 = await request.get("booking/2");
   console.log(await bookindetail2.json());
  })

  
test("API teste 3", async ({ request }) => {
    const bookingDetail2 = await request.get("booking/3");
    expect(bookingDetail2.ok()).toBeTruthy();
    console.log(await bookingDetail2.json());
  });

  test(
  "verfier que l'utilisateur arrive a voir la liste des bookings",
  {
    tag: ["@API", "@rec"],
    annotation: {
      type: "affichage de la liste des bookings",
      description:
        "https://www.youtube.com/watch?v=5OCwI1egNnU&t=14s",
    },
  },
  async ({ request }) => {
    const bookinget = await request.get("booking");
    expect(bookinget.ok()).toBeTruthy();
    const bookings = await bookinget.json();
  console.log("Liste des bookings:", bookings);
    expect(bookings.length).toBeGreaterThan(0); // Vérifie qu'il y a au moins un booking
    expect(bookings.sta)
    
    });