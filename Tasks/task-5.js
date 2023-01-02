const accountPatients = (freeBeds) => {
  let bedsCounter = freeBeds;
  let patientsCount = 0;
  function addPatient() {
    if (bedsCounter) {
      patientsCount++;
      bedsCounter--;
      console.log(`A patient was admitted, ${bedsCounter} beds are available`);
    } else {
      console.log('Can not admit a patient, no beds available');
    }
  }
  function dischargePatient() {
    if (patientsCount) {
      patientsCount--;
      bedsCounter++;
      console.log(
        `A patient was discharged, ${bedsCounter} beds are available`
      );
    } else {
      console.log('There are no patients to discharge');
    }
  }
  return [addPatient, dischargePatient];
};

export default accountPatients;
