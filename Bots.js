const Discord = require("discord.js");
const client = new Discord.Client();
    var ms = 60000 ;
    var setGame = ['kkk'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],http://www.twitch.tv/barontube);
client.login(process.env.BOT_TOKEN);