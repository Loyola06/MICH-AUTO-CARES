const fname = document.getElementById("fname");
const date = document.getElementById("cdate");
const email = document.getElementById("email");
const phone = document.getElementById("teli");
const message = document.getElementById("message");
const baseUrl = "https://mich-auto-care-backend.onrender.com/api";

const sendAppointment = async () => {
  try {
    const loadingElement = document.getElementById("loading");
    loadingElement.style.display = "block"; // Show loading animation

    const payload = {
      name: fname.value,
      date: date.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    };

    const res = await axios.post(`${baseUrl}/appointment`, payload);
    alert(res.data.message);
    loadingElement.style.display = "none"; // Hide loading animation
  } catch (error) {
    const loadingElement = document.getElementById("loading");
    loadingElement.style.display = "none"; // Hide loading animation
    alert(error.response.data.message);
  }
};

const sendSellRequest = async () => {
  const loadingElement = document.getElementById("loader");
  loadingElement.style.display = "block"; // Hide loading animation

  const name = document.getElementById("sname");
  const phone = document.getElementById("PhoneNumber");
  const city = document.getElementById("city");
  const model = document.getElementById("model");
  const year = document.getElementById("year");
  const vin = document.getElementById("vin");
  const internalCondition = document.getElementById("internalCondition");
  const mechanicalCondition = document.getElementById("mechanicalCondition");
  const transmission = document.getElementById("transmission");
  const color = document.getElementById("color");
  const maintainanceRecord = document.getElementById("maintainanceRecord");
  const negotiation = document.getElementById("negotiation");
  const email = document.getElementById("semail");
  const date = document.getElementById("date");
  const state = document.getElementById("state");
  const title = document.getElementById("title");
  const make = document.getElementById("make");
  const externalCondition = document.getElementById("externalCondition");
  const accident = document.getElementById("accident");
  const engineSize = document.getElementById("engineSize");
  const fuelType = document.getElementById("fuelType");
  const recentUpgrade = document.getElementById("recentUpgrade");
  const testDrive = document.getElementById("testDrive");
  const confirmation = document.getElementById("confirmation");
  try {
    const personalDetails = {
      name: name.value,
      city: city.value,
      phoneNumber: phone.value,
      state: state.value,
      title: title.value,
      email: email.value,
    };

    const carDetails = {
      model: model.value,
      year: year.value,
      vin: vin.value,
      make: make.value,
      fuelType: fuelType.value,
      maintainanceRecord: maintainanceRecord.value,
      negotiation: negotiation.value,
    };

    const carCondition = {
      internalCondition: internalCondition.value,
      mechanicalCondition: mechanicalCondition.value,
      externalCondition: externalCondition.value,
      accident: accident.value,
      recentUpgrade: recentUpgrade.value,
    };

    const features = {
      transmission: transmission.value,
      color: color.value,
      engineSize: engineSize.value,
      testDrive: testDrive.value,
      confirmation: confirmation.value,
    };
    const payload = {
      personalDetails,
      carDetails,
      carCondition,
      features,
      saleDate: date.value,
    };
    const res = await axios.post(`${baseUrl}/sell`, payload);
    alert(res.data.message);
  } catch (error) {
    const loadingElement = document.getElementById("loader");
    loadingElement.style.display = "none"; // Hide loading animation
    alert("Something went wrong.");
  }
};
