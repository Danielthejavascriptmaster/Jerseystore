let isSwedish = false;

function toggleLanguage() {
    const heroHeading = document.querySelector(".image-buttons h2");
    const shopButton = document.querySelector(".shop-button");
    const storyTitle = document.querySelector(".our-story-section h2");
    const storyText = document.querySelector(".our-story-section p");
    const findUsTitle = document.querySelector(".where-to-find-us h2");
    const findUsText = document.querySelector(".where-to-find-us p");
    const contactTitle = document.querySelector(".how-to-contact-us h2");
    const contactText = document.querySelector(".how-to-contact-us p");
    const shopNavLink = document.querySelector('.nav-links a[href="#shop"]');
    const contactNavLink = document.querySelector('.nav-links a[href="#contact"]');
    const jerseysHeading = document.querySelector(".sub-hero-section h1");

    if (!isSwedish) {
        heroHeading.textContent = "Köp VM-tröjor till bra pris";
        shopButton.textContent = "Handla Nu ->";
        storyTitle.textContent = "Vår Historia";
        storyText.textContent = "KitKing startade med en enkel idé: fotbollsfans ska inte behöva välja mellan kvalitet och pris. Vi vet hur det är att vilja ha ditt favoritlags tröja utan att betala fullt butikspris. Det är därför vi handplockar varje tröja vi säljer — vi kontrollerar kvalitet, passform och skick innan den når dig. Inga genvägar, inga överraskningar, bara bra tröjor till ett schysst pris.";
        findUsTitle.textContent = "Var hittar du oss?";
        findUsText.textContent = "Vi är aktiva på Plick och Vinted — kolla in våra annonser, se recensioner från tidigare köpare och skicka meddelanden direkt där. Plick: KitKing_fr Vinted: KitKing_fr";
        contactTitle.textContent = "Hur kontaktar du oss?";
        contactText.textContent = "Föredrar du meddelanden framför mejl? Samma här — men vi har dig täckt ändå. Nå oss på Plick, Vinted eller mejl. Vi kollar alla tre dagligen och svarar oftast samma dag. Tänk bara på att svarstiderna kan vara lite längre under högsäsong eller helger.";
        if (shopNavLink) shopNavLink.textContent = "Handla";
        if (contactNavLink) contactNavLink.textContent = "Kontakt";
        if (jerseysHeading) jerseysHeading.textContent = "Några av tröjorna vi säljer";
    } else {
        heroHeading.textContent = "Buy World Cup jerseys for a good price";
        shopButton.textContent = "Shop Now ->";
        storyTitle.textContent = "Our Story";
        storyText.textContent = "KitKing started with a simple idea: football fans shouldn't have to choose between quality and affordability. We know what it's like to want your favorite team's jersey but not want to pay full retail price for it. That's why we hand-pick every jersey we sell — checking quality, fit, and condition before it ever reaches you. No shortcuts, no surprises, just good jerseys at a fair price.";
        findUsTitle.textContent = "Where to find us?";
        findUsText.textContent = "We're active on Plick and Vinted — check out our listings, see reviews from past buyers, and message us directly there. Plick: KitKing_fr Vinted: KitKing_fr";
        contactTitle.textContent = "How to contact us?";
        contactText.textContent = "Prefer messaging over email? Same here — but we've got you covered either way. Reach us on Plick, Vinted, or email. We check all three daily and usually reply the same day. Just note that during busy seasons or holidays, response times might be a bit slower than usual.";
        if (shopNavLink) shopNavLink.textContent = "Shop";
        if (contactNavLink) contactNavLink.textContent = "Contact";
        if (jerseysHeading) jerseysHeading.textContent = "Some of the jerseys we sell";
    }

    isSwedish = !isSwedish;
}

document.getElementById("lang-toggle").addEventListener("click", toggleLanguage);