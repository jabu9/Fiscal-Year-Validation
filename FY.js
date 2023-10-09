// Validation for Fiscal Year Input Field in PDF Form

// Get the Beginning PoP Value
var begin_pop = this.getField("beginning_pop").valuesAsString;

// Get the Edning PoP Value
var end_pop = this.getField("ending_pop").valuesAsString;

// check if Beginning PoP is Null or Empty
if (begin_pop.length > 0) {
  app.alert("The FY selection can't be changed after the PoP Inputs.  Please clear your selections and retry.");
    event.rc = false;
}

// check if Ending PoP is Null or Empty
if (end_pop.length > 0) {
  app.alert("The FY selection can't be changed after the PoP Inputs.  Please clear your selections and retry.");
    event.rc = false;
}
