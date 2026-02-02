//Home-page js
document.addEventListener("DOMContentLoaded", function () 
{
    let maharashtrian = ["Modak", "Pithala-Bhakri", "Varan-Bhaat", "Ghavan", "Bharli Vangi", "Puran Podi", "Aduwadi", "Solkadhi", "Vadapav", "And much more..."];
    let punjabi = ["Chhole Bhature", "Variety of paneer", "Chhole Kulche", "Variety of Naan", "Parathas", "Makke di Roti and Sarso da saag", "And much more..."];
    let rajasthani = ["Bhutte ka Kees", "Daal Baati", "Daal Baafle", "Churma", "Kadhi Sogra", "Bajre ki Roti", "Khoba roti", "Masala Baati", "Mirchi Bade", "Lehsun Chutney", "Makki ke Dhokle", "And much more..."];
    let southIndian = ["Variety of Dosa", "Idli Sambhar", "Vada Sambhar", "Filter Kaapi", "Rice Sambhar", "Pondi Idli", "Hyderabadi Biryani (Veg)", "And much more..."];
    let gujarati = ["Sev Tameta nu Saag", "Undhiyu", "Kadhi gole", "Dhokla", "Khandvi", "Fafda Jalebi", "Handvo", "Thepla", "Gujarati Daal", "And much more..."];
    let chaats = ["Sev papdi", "Pani puri", "Dahi puri", "Dabeli", "Bhel", "Bhel papdi", "Aloo Tikki", "Dahi Vada", "Samosa Chaat", "Sprouts Bhel", "And much more..."];

    let current_dish = [];
    let index = 0;

    function showDish() 
    {
        document.getElementById("dish_name").innerText = current_dish[index];
        document.getElementById("dish_box").style.visibility = 'visible';
    }

    document.getElementById("maharashtra").addEventListener("click", function () 
    {
        current_dish = maharashtrian;
        index = 0;
        showDish();
    });
    document.getElementById("punjab").addEventListener("click", function () 
    {
        current_dish = punjabi;
        index = 0;
        showDish(); 
    });
    document.getElementById("rajasthan").addEventListener("click", function () 
    {
        current_dish = rajasthani;
        index = 0;
        showDish();
    });
    document.getElementById("south").addEventListener("click", function () 
    {
        current_dish = southIndian;
        index = 0;
        showDish();
    });
    document.getElementById("gujarat").addEventListener("click", function () 
    {
        current_dish = gujarati;
        index = 0;
        showDish();
    });
    document.getElementById("chaat").addEventListener("click", function () 
    {
        current_dish = chaats;
        index = 0;
        showDish();
    });
    document.getElementById("next").addEventListener("click", function () 
    {
        if (current_dish.length === 0) return;
        index++;
        if (index >= current_dish.length) index = 0;
        showDish();
    });
    document.getElementById("prev").addEventListener("click", function () 
    {
        if (current_dish.length === 0) return;
        index--;
        if (index < 0) index = current_dish.length - 1;
        showDish();
    });
});

//Bookings-page js
document.getElementById('bookingForm').addEventListener('submit', function(e)
{
    e.preventDefault(); 

    let name = document.getElementById('box1').value;
    let email = document.getElementById('box2').value;
    let mobile = document.getElementById('box3').value;
    let members = document.getElementById('box4').value;
    let date = document.getElementById('box5').value;
    let time = document.getElementById('box6').value;

    if(name === "")
    {
        alert('Please enter your name');
        return;
    } 
    if(email === "" || !email.includes('@'))
    {
        alert('Please enter valid email');
        return;
    }
    if(mobile.length != 10)
    {
        alert('Mobile number must be of 10 digits');
        return;
    }
    if(members<1 || members>82)
    {
        alert('Members must be between 1 and 82');
        return;
    }
    if(date === "")
    {
        alert('Please select date');
        return;
    }
    if(time === "")
    {
        alert('Please select time');
        return;
    }
    alert('Booking successful. Please proceed to Payment');
    this.submit();
});
