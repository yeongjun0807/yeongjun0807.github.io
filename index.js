const Discord = require('discord.js');
const bot = new Discord.Client();

const ytdl = require("ytdl-core")

const token = 'NzI2MDIxOTk3NjcwMzAxNzU2.XvnldA.iECL0mGo7QD4zn53n94Pqmw4FyU';

const PREFIX = "/";

var servers = {};

bot.on('ready', () =>{
    console.log("This bot is online!");
    bot.user.setActivity("Greetings, Questions & Commands");
});

bot.on('message', msg=>{
    var message = msg;
    if (msg.content === "help") {
        msg.reply("영어 및 한국어로 된 인사를 입력하시면, 저도 인사를 하겠습니다.")
    }

    // after any command, the nth word is anyway an argument. [] - must enter  () - could enter,will cause a additional function
    if (msg.content === "cmd") {
        msg.reply('/name, /die, /clear [int] (i), /info, /kick [userName] [string], /status [userName]');
    }

    if(msg.content === "hi" || msg.content === "Hi" || msg.content === "안녕" || msg.content === "ㅎㅇ" || msg.content === "ㅎ2" || msg.content === "hello" || msg.content === "하이" || msg.content === "야" || msg.content === "HI"){
        msg.channel.send('안녕하신가 휴먼');
    }

    if (!msg.content.startsWith(PREFIX)) return;
    let cmd = msg.content.substring(PREFIX.length).split(" ");
    switch(cmd[0]) {
        case 'name':
            msg.reply("제 이름은 KANG입니다, 휴먼");
            break;
        
        case 'die':
            msg.reply("미쳤습니까, 휴먼?");
            msg.reply("https://cdn.discordapp.com/attachments/724928149036597370/726011737928761354/WLrzXE.mp4");
            break;
        
        case 'clear':
            if (cmd[1]) {
                if (cmd[2] == "i") {
                    msg.channel.bulkDelete(cmd[1]);
                }
                else {
                    msg.channel.bulkDelete(cmd[1]);
                    msg.reply("메시지 삭제 완료.");
                    msg.reply("추가 메시지 삭제 => /clear [int] i");
                }
            }
            else {
                msg.channel.bulkDelete("1");
            }
            break;
        
        case 'info':
            const infoembed = new Discord.MessageEmbed()
            .setTitle("봇 정보")
            .setThumbnail("https://cdn.discordapp.com/attachments/724928149036597370/726457061289885807/e6b870e262e6df09.jpg")
            .addField("이름", "KANG | 강인공지능")
            .addField("개발자", "IQ나무, 프로그래머")
            .addField("버전", "1.10alpha")
            .setTimestamp(new Date)
            .setColor("#ff720d")
            .setFooter("/info command line excuted");

            msg.channel.send(infoembed);

            break;

        case 'kick':
            if (!cmd[1]) {msg.reply("추방할 사람을 안골랐네! ㄴㅇㄱ"); return;}

            var user = msg.mentions.users.first();
            if (cmd[2] || cmd[2] == "supersecretcode") {
                if (user) {
                    var member = msg.guild.member(user);

                    if (member) {
                        member.kick('KANG 봇 => ' + `${member.username}` + '를 추방함.').then(() => {
                            msg.channel.bulkDelete("1");
                            msg.reply(`성공적으로 ${user.username} 를 추방했다. 잘했다 휴먼.`)
                        }).catch(err => {
                            msg.reply(err);
                            msg.reply("위와 같은 사유로 추방에 실패했다, 휴먼!")
                            console.log(err);
                        });
                    } else {
                        msg.reply("추방 실패");
                    }
                } else {
                    msg.reply('추방 실패');
                }
            } else {
                msg.reply("시크릿 코드를 입력하지 않았네! ㄴㅇㄱ");
            }
            break;
        case 'status':
            if(!cmd[1]) {msg.reply("상태를 확인할 사람을 골라라, 휴먼"); return;}
            try {
                function realstatus (status) {
                    if (status == "online") return "온라인";
                    if (status == "idle") return "자리 비움";
                    if (status == "dnd") return "방해 금지";
                    if (status == "offline") return "오프라인";
                }
                var user = msg.mentions.users.first();
                var member = msg.guild.member(user);
                console.log(member.presence.status);
                var stat = realstatus(member.presence.status);
                msg.channel.send(`${user.username}` + '님은 ' + stat + '입니다.');
            }
            catch(err) {
                msg.channel.send("WRONG_ARGUMENT 에러 : 올바른 닉네임을 입력해라, 휴먼");
            }
            break;
        case 'music':

            function play(connection, message) {
                var server = servers[message.guild.id];

                server.dispatcher = connection.play(ytdl(server.queue[0], {filter: 'audioonly'}))
            
                server.queue.shift();

                server.dispatcher.on("end", function() {
                    if(server.queue[0]){
                        play(connection, message);
                    }
                    else {
                        connection.disconnect()
                    }
                });

            }

            if (!cmd[1]) {msg.channel.send("NOT_EXIST 에러 : 1번 인수는 필수다, 휴먼"); return;}
            if (!msg.member.voice.channel){msg.reply("음성 채널에 입장해라, 휴먼"); return;}
            
            if (!servers[msg.guild.id]) servers[msg.guild.id] = {
                queue: []
            }
            
            var server = servers[msg.guild.id];

            server.queue.push(cmd[1]);
            if(!msg.member.voice.connection) msg.member.voice.channel.join().then(function(connection) {
                play(connection, message);
                
            })
            
            break;

    }
})

bot.login(token);
