const data=[
["Kalau punya free time, kamu pengen ngapain?",["Nonton film & dengerin musik 🎧","Jalan-jalan / explore tempat baru 🗺️","Nulis, gambar, atau bikin sesuatu 🎨","Quality time sama bestie 💗"],["moon","starlight","dream","sweet"]],
["Warna yang paling menggambarkan kamu?",["Pink pastel 🌸","Lavender 💜","Mint green 🌿","Butter yellow 💛"],["sweet","dream","nature","starlight"]],
["Kalau ur bestie lagi badmood, kamu biasanya...",["Dengerin sampai dia lega 🌙","Ajak jalan & bikin ketawa ⭐","Kasih hadiah kecil / makanan 🍓","Kasih space tapi tetap standby 🌿"],["moon","starlight","sweet","nature"]],
["Tempat magical mana yang paling ingin kamu kunjungi?",["Istana di atas awan ☁️","Hutan ajaib penuh bunga 🌸","Lautan bintang ⭐","Taman rahasia yang sunyi 🌿"],["dream","nature","starlight","moon"]],
["Kamu lebih suka jadi...",["Pemimpin yang berani ⭐","Penjaga alam 🌿","Seniman dunia mimpi 🦋","Sahabat yang selalu menghangatkan 🍓"],["starlight","nature","dream","sweet"]],
["Pilih benda magical favoritmu",["Cermin bulan 🌙","Tongkat bunga 🌸","Buku mantra mimpi 🦋","Kalung bintang ⭐"],["moon","nature","dream","starlight"]],
["Kalau hidupmu punya soundtrack, vibes-nya apa?",["Dreamy & mellow ☁️","Happy & bubbly 🍓","Mystical & soft 🌙","Powerful & sparkling ⭐"],["dream","sweet","moon","starlight"]]
];
const fairies={
bloom:{name:"THE BLOOM FAIRY",emoji:"🌸🧚🏻‍♀️",quote:"Your kindness makes everything bloom.",traits:"cheerful • caring • radiant",power:"Blooming hearts & healing light",color:"Blush Pink"},
moon:{name:"THE MOON FAIRY",emoji:"🌙🧚🏻‍♀️",quote:"There is magic in your quiet moments.",traits:"calm • thoughtful • intuitive",power:"Moonlight wisdom",color:"Lavender"},
dream:{name:"THE DREAM FAIRY",emoji:"🦋🧚🏻‍♀️",quote:"Your imagination is your superpower.",traits:"creative • imaginative • curious",power:"Turning dreams into ideas",color:"Lilac"},
nature:{name:"THE NATURE FAIRY",emoji:"🌿🧚🏻‍♀️",quote:"Stay grounded, grow gently.",traits:"peaceful • grounded • gentle",power:"Nature harmony",color:"Mint"},
starlight:{name:"THE STARLIGHT FAIRY",emoji:"⭐🧚🏻‍♀️",quote:"You were made to shine.",traits:"confident • ambitious • bold",power:"Starlight energy",color:"Butter Yellow"},
sweet:{name:"THE SWEET FAIRY",emoji:"🍓🧚🏻‍♀️",quote:"Your warmth is a little kind of magic.",traits:"warm • playful • loyal",power:"Joy & friendship magic",color:"Strawberry Pink"}
};
let i=0,chosen=null,scores={bloom:0,moon:0,dream:0,nature:0,starlight:0,sweet:0};
const $=x=>document.querySelector(x);
function show(id){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));$(id).classList.add("active");window.scrollTo(0,0)}
function render(){let q=data[i];$("#count").textContent=`${i+1} / ${data.length}`;$("#bar").style.width=`${((i+1)/data.length)*100}%`;$("#question").textContent=q[0];$("#answers").innerHTML=q[1].map((a,n)=>`<button class="answer ${chosen===n?"selected":""}" data-n="${n}">${a}</button>`).join("");document.querySelectorAll(".answer").forEach(b=>b.onclick=()=>{chosen=+b.dataset.n;document.querySelectorAll(".answer").forEach(x=>x.classList.remove("selected"));b.classList.add("selected")})}
function finish(){let keys=Object.keys(scores);let winner=keys.reduce((a,b)=>scores[b]>scores[a]?b:a);let f=fairies[winner];$("#resultEmoji").textContent=f.emoji;$("#resultName").textContent=f.name;$("#resultQuote").textContent=`“${f.quote}”`;$("#traits").innerHTML=`<div class="trait"><b>✨ YOUR TRAITS</b>${f.traits}</div><div class="trait"><b>💗 YOUR MAGICAL POWER</b>${f.power}</div><div class="trait"><b>🌷 YOUR FAIRY COLOR</b>${f.color}</div><div class="trait"><b>🧚 YOUR FAIRY QUOTE</b>${f.quote}</div>`;show("#result")}
$("#startBtn").onclick=()=>{i=0;chosen=null;scores={bloom:0,moon:0,dream:0,nature:0,starlight:0,sweet:0};render();show("#quiz")};
$("#nextBtn").onclick=()=>{if(chosen===null){alert("Pick one magical answer first ✨");return}let fairy=data[i][2][chosen];scores[fairy]++;if(i<data.length-1){i++;chosen=null;render()}else finish()};
$("#backBtn").onclick=()=>{if(i>0){i--;chosen=null;render()}else show("#welcome")};
$("#retake").onclick=()=>{$("#startBtn").click()};
$("#share").onclick=async()=>{let text=`✨ I am ${$("#resultName").textContent}! ${$("#resultQuote").textContent} — Fairy Finder ✨`;try{if(navigator.share)await navigator.share({title:"Fairy Finder",text});else{await navigator.clipboard.writeText(text);alert("Result copied! ✨")}}catch(e){}};
$("#musicBtn").onclick=async()=>{let a=$("#bgm");if(a.paused){try{await a.play();$("#musicBtn").textContent="🎵 Music On"}catch(e){alert("Tambahkan file MP3 ke folder music dengan nama fairy-music.mp3 dulu ya ✨")}}else{a.pause();$("#musicBtn").textContent="🎵 Turn On Music"}};
