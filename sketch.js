let capture;
let width = 640 ;
let height = 480 ;
let Bweather;
let rSlider, gSlider, bSlider;




function setup() {
createCanvas(width, height);
  capture = createCapture(VIDEO);
capture.size(520, 440);
capture.hide();

}

function draw() {

  background(200);
  translate(width,0); // move to far corner
  scale(-1.0,1.0);    // flip x-axis backwards
  image(capture, 0, 0, width, height);

  translate(width,0); // move to far corner
  scale(-1.0,1.0);    // flip back to normal


  button = createImg('https://i.imgur.com/OPVPKh7.png');
button.position(10,135);
button.mousePressed(temperature);
  
  button = createImg('https://i.imgur.com/7qshlSV.png');
button.position(10,200);
 // button.mousePressed(moods);

button = createImg('https://i.imgur.com/j71bxyg.png');
button.position(560,275);
button.mousePressed(settings);

button = createImg('https://i.imgur.com/vil7H9s.png');
button.position(560,90);
button.mousePressed(settings);

  button = createImg('https://i.imgur.com/Eh84pkY.png');
button.position(560,325);
button.mousePressed(widgets);

  button = createImg('https://i.imgur.com/wBEYhak.png');
button.position(560,375);
button.mousePressed(youtube);

  button = createImg('https://i.imgur.com/DM0TD8c.png');
button.position(560,400);
button.mousePressed(facebook);  

mn=minute();
hr=hour();
sc=second();
  d=day();
  m=month();
  y=year();
  fill(255);
textSize(28);
  text( m+'/'+d+'/'+y,245,80);
  fill(255);
textSize(28);
  text( hr+':'+mn+':'+sc,250,50);


}

function temperature(){
loadJSON('https://api.openweathermap.org/data/2.5/forecast?q=Lubbock,us&APPID=89865a36aac515e4d383e822e4662c5b&units=metric',getweather);

if(Bweather){
       for (let i=0; i<Bweather.list.length;i++){
          fill(255);
          text(new Date(Bweather.list[i].dt_txt).format('hh:mmtt'),0,30*i+20);
          text(Bweather.list[i].main.temp,60,30*i+20);
          image(img0[i],90,30*i-10);
       }
}


function getweather(data0) {
Bweather = data0;
    console.log(Bweather);
    img0 = Bweather.list.map(w=>loadImage('https://openweathermap.org/img/wn/'+w.weather[0].icon+'.png'));
}


// format time from http://jsfiddle.net/BNkkB/1/

Date.prototype.format = function (format, utc){
    return formatDate(this, format, utc);
};
function formatDate(date, format, utc){
        var MMMM = ["\x00", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var MMM = ["\x01", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var dddd = ["\x02", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var ddd = ["\x03", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        function ii(i, len) { var s = i + ""; len = len || 2; while (s.length<len) s = "0" + s; return s; }

        var y = utc ? date.getUTCFullYear() : date.getFullYear();
        format = format.replace(/(^|[^\\])yyyy+/g, "$1" + y);
        format = format.replace(/(^|[^\\])yy/g, "$1" + y.toString().substr(2, 2));
        format = format.replace(/(^|[^\\])y/g, "$1" + y);

        var M = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
        format = format.replace(/(^|[^\\])MMMM+/g, "$1" + MMMM[0]);
        format = format.replace(/(^|[^\\])MMM/g, "$1" + MMM[0]);
        format = format.replace(/(^|[^\\])MM/g, "$1" + ii(M));
        format = format.replace(/(^|[^\\])M/g, "$1" + M);

        var d = utc ? date.getUTCDate() : date.getDate();
        format = format.replace(/(^|[^\\])dddd+/g, "$1" + dddd[0]);
        format = format.replace(/(^|[^\\])ddd/g, "$1" + ddd[0]);
        format = format.replace(/(^|[^\\])dd/g, "$1" + ii(d));
        format = format.replace(/(^|[^\\])d/g, "$1" + d);

        var H = utc ? date.getUTCHours() : date.getHours();
        format = format.replace(/(^|[^\\])HH+/g, "$1" + ii(H));
        format = format.replace(/(^|[^\\])H/g, "$1" + H);

        var h = H > 12 ? H - 12 : H == 0 ? 12 : H;
        format = format.replace(/(^|[^\\])hh+/g, "$1" + ii(h));
        format = format.replace(/(^|[^\\])h/g, "$1" + h);

        var m = utc ? date.getUTCMinutes() : date.getMinutes();
        format = format.replace(/(^|[^\\])mm+/g, "$1" + ii(m));
        format = format.replace(/(^|[^\\])m/g, "$1" + m);

        var s = utc ? date.getUTCSeconds() : date.getSeconds();
        format = format.replace(/(^|[^\\])ss+/g, "$1" + ii(s));
        format = format.replace(/(^|[^\\])s/g, "$1" + s);

        var f = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
        format = format.replace(/(^|[^\\])fff+/g, "$1" + ii(f, 3));
        f = Math.round(f / 10);
        format = format.replace(/(^|[^\\])ff/g, "$1" + ii(f));
        f = Math.round(f / 10);
        format = format.replace(/(^|[^\\])f/g, "$1" + f);

        var T = H < 12 ? "AM" : "PM";
        format = format.replace(/(^|[^\\])TT+/g, "$1" + T);
        format = format.replace(/(^|[^\\])T/g, "$1" + T.charAt(0));

        var t = T.toLowerCase();
        format = format.replace(/(^|[^\\])tt+/g, "$1" + t);
        format = format.replace(/(^|[^\\])t/g, "$1" + t.charAt(0));

        var tz = -date.getTimezoneOffset();
        var K = utc || !tz ? "Z" : tz> 0 ? "+" : "-";
        if (!utc)
        {
tz = Math.abs(tz);
            var tzHrs = Math.floor(tz / 60);
            var tzMin = tz % 60;
            K += ii(tzHrs) + ":" + ii(tzMin);
        }
        format = format.replace(/(^|[^\\])K/g, "$1" + K);

        var day = (utc ? date.getUTCDay() : date.getDay()) + 1;
        format = format.replace(new RegExp(dddd[0], "g"), dddd[day]);
        format = format.replace(new RegExp(ddd[0], "g"), ddd[day]);

        format = format.replace(new RegExp(MMMM[0], "g"), MMMM[M]);
        format = format.replace(new RegExp(MMM[0], "g"), MMM[M]);

        format = format.replace(/\\(.)/g, "$1");

        return format;
    }
}

function settings() {
  console.log("Settings coming soon")
/*  button = createImg('https://i.imgur.com/11Ezh1S.jpg');
button.position(120,75);
button.mousePressed(settings);*/
   //Settings Slider
rSlider = createSlider(0, 255, 0);
rSlider.position(300, 20);
gSlider = createSlider(0, 255, 0);
gSlider.position(300, 50);
bSlider = createSlider(0, 255, 0);
bSlider.position(300, 80);

  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  background(r, g, b);
  text('red', rSlider.x * 2 + rSlider.width, 35);
  text('green', gSlider.x * 2 + gSlider.width, 65);
  text('blue', bSlider.x * 2 + bSlider.width, 95);

}

function widgets() {
  console.log("Widgets coming soon")
}

function facebook() {
  console.log("Facebook coming soon")
}

function youtube() {
  console.log("Youtube coming soon")

}



