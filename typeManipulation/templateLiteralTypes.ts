type World = "world";

type Greeting = `hello ${World}`;

let greet: Greeting = "hello";

// When a union is used in the interpolated position, the type is the set of every possible string literal that could be represented by each union member

type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;

type Lang = "en" | "ja" | "pt";

type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;

// explain the usefulness of the template literal types.

// Intrinsic String Manipulation Types

type ShoutGreeting = Uppercase<Greeting>;

type CapitalGreeting = Capitalize<Greeting>;
