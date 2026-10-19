# Fiscal Year Validation

An Adobe Acrobat JavaScript validation script for PDF forms. It locks the **Fiscal Year (FY)** field once a Period of Performance (PoP) has been entered, so users can't change the FY and leave the PoP dates out of sync.

## How it works

When someone tries to change the FY field, the script checks the `beginning_pop` and `ending_pop` fields. If either already has a value, it shows an alert and rejects the change (`event.rc = false`). The user has to clear the PoP dates first.

## Setup

1. Open the PDF form in **Adobe Acrobat Pro** and go to **Prepare Form**.
2. Make sure your PoP fields are named `beginning_pop` and `ending_pop` (or edit the names in `FY.js` to match yours).
3. Right-click the FY field → **Properties** → **Validate** tab.
4. Choose **Run custom validation script**, click **Edit**, and paste in the contents of [`FY.js`](FY.js).
5. Save the form and test it.

## Customizing

- **Field names:** change the strings passed to `this.getField(...)`.
- **Message:** edit the text in `app.alert(...)`.

## License

Released into the public domain under [The Unlicense](LICENSE).
