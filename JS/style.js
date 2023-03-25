$(document).ready(function(){

  $('#toggler').click(function(){
    $('.wrap').toggleClass('toggled');
   })  
  
   var CurrentDate= new Date();
   $("#current_year").text(CurrentDate.getFullYear());

})
function backFunction() {
  var background = document.body;
  background.classList.toggle("night-mode");
  }

  function myFunction() {
    let x = document.getElementById("icon");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function BTNFunction() {
    var y = document.getElementById("readmore");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }

  }

  function DateFunction() {
    var x = document.getElementById("DateFunction").value;
    document.getElementById("demo").innerHTML = x;
  }


  const cities = 
  {
    EGY:  ["القاهرة", "الإسكندرية", "البحيرة", "كفر الشيخ", "دمياط", "بورسعيد", "الإسماعيلية", "السويس", "الشرقية", "بني سويف", "المنيا", "أسيوط", "الفيوم", "المنوفية", "الغربية", "الدقهلية", "كفر الدوار", "قنا", "الأقصر", "أسوان", "سوهاج", "الوادي الجديد", "شمال سيناء", "جنوب سيناء", "البحر الأحمر", "مطروح", "الساحل الشمالي"],
    KSA: [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"
    ],
    UAE: ["أبو ظبي","دبي","شارقة","عجمان","أم القيوين","رأس الخيمة","الفجيرة"]
  };

  const countrySelect = document.getElementById('country');
  const citySelect = document.getElementById('city');

  countrySelect.addEventListener('change', (event) => {
    const selectedCountry = event.target.value;
    citySelect.innerHTML = '';
    citySelect.disabled = true;
    const defaultOption = document.createElement('option');
    defaultOption.text = '--Please choose a city--';
    defaultOption.value = '';
    citySelect.appendChild(defaultOption);

    if (selectedCountry) {
      const citiesArray = cities[selectedCountry];
      citiesArray.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.text = city;
        citySelect.appendChild(option);
      });
      citySelect.disabled = false;
    }
    var video = document.getElementById("video");
    var card = document.querySelector(".card");
  
    card.addEventListener("click", function() {
      video.play();
    });
document.querySelector('.sidebar-toggle').addEventListener('click', function() {
  document.querySelector('.sidebar').classList.toggle('active');
});

$('#toggler').click(function(){
  $('.wrap').toggleClass('toggled');
 })
  });





