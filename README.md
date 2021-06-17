data for build should be moved from json to db

images and fonts should be placed in public (should be moved to CDN)

DB structure for development

delivery
{"_id":{"$oid":"60352d24755f41460f17e9f3"},"type":"spb","name":"Доставка по спб","price":"200"}

items
{"_id":{"$oid":"60352ac2755f41460f17e93e"},"images":[{"original":"/images/000001/1.JPEG","mini":"/images/000001/1_mini.JPEG","thumbnail":"/images/000001/1_thumb.JPEG"},{"original":"/images/000001/2.JPEG","thumbnail":"/images/000001/2_thumb.JPEG"},{"original":"/images/000001/3.JPEG","thumbnail":"/images/000001/3_thumb.JPEG"}],"name":"BittBoy","price":"3500","newPrice":"","out":true,"colors":[{"label":"серый","value":"grey"}],"code":"000001","text":["Портативная консоль BittBoy – это возможность окунуться в мир любимых ретро-игр. Знакомый и удобный дизайн выполнен в духе лучших карманных консолей прошлых лет. Легкость, компактность, удобство – все это о BittBoy."],"features":["Встроенный аккумулятор","Поддержка добавления игр на SD-карту","Большое количество эмуляторов","Огромная библиотека игр"],"characteristics":["Материал – АБС пластик","Размеры 6.8x9.9x1.3см","2.4 дюйма IPS-экран","Язык интерфейса – английский","Порты: 3.5мм разьем для наушников, слот для SD карт, micro USB порт зарядки","Поддерживаемые эмуляторы NES/GB/GBC/GBA/SNES/SMD/SMS/PCE/NEOGEO","700мАч встроенный аккумулятор"],"equipment":["Консоль BittBoy ","USB кабель зарядки","Руководство (на английском языке)","Micro SD карточка (8Гб)","Переходник Micro SD на USB"]}

orders 
{"_id":{"$oid":"6038e34cb7538a4ede1da256"},"confirmed":false,"data":{"delivery":"spb","name":"Алекс","surname":"Чирков","address":"Олонец","postIndex":"197000","phone":"+79955922284","email":"hello@alexchirkin.me","comment":""},"items":[{"count":1,"color":"white","code":"000002"}]}