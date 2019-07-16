const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const ws = require("ws");

const app = express();

//sets and uses

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + "/public"));

//api
app.post("/maps", (req, res) => {
  res.json(
    [
      {
        "id": 1,
        "name": 'N37004.mtw',
        "edition": '1.0',
        "class_abbr": 'ЦМР',
        "scale": 100000,
        "type": 'MTW',
        "title": 'Имя не задано',
        "size": '558.1 КБ',
        "creator": '03.04.2019'
      },
      {
        "id": 2,
        "name": '0.L-37-113-1',
        "edition": '1.0',
        "class_abbr": 'ЦТКВ',
        "scale": 50000,
        "type": 'SXF',
        "title": 'АБИНСК',
        "size": '3.68 МБ',
        "creator": '21.03.2019'
      },
      {
        "id": 3,
        "name": '0.L-37-124-1',
        "edition": '1.0',
        "class_abbr": 'ЦТКВ',
        "scale": 50000,
        "type": 'SXF',
        "title": 'ШИРОКАЯ БАЛКА',
        "size": '1.09 МБ',
        "creator": '21.03.2019'
      },
      {
        "id": 4,
        "name": '0.L-37-112-4',
        "edition": '1.0',
        "class_abbr": 'ЦТКВ',
        "scale": 50000,
        "type": 'SXF',
        "title": 'НОВОРОССИЙСК',
        "size": '10.59 МБ',
        "creator": '21.03.2019'
      },
      {
        "id": 5,
        "name": 'N37004.mtw',
        "edition": '1.0',
        "class_abbr": 'ЦТКВ',
        "scale": 50000,
        "type": 'SXF',
        "title": 'СИНЕГОРСК',
        "size": '10.7 МБ',
        "creator": '21.03.2019'
      },
      {
        "id": 6,
        "name": 'RU4MBLQ0',
        "edition": '3',
        "class_abbr": 'ЭНК',
        "scale": 45000,
        "type": 'S57',
        "title": 'САКИ',
        "size": '558.1 КБ',
        "creator": '03.04.2019'
      },
      {
        "id": 7,
        "name": 'RU5MBLT0',
        "edition": '1.0',
        "class_abbr": 'ЦТКВ',
        "scale": 4000,
        "type": 'SXF',
        "title": 'Черное море',
        "size": '3.68 МБ',
        "creator": '21.03.2019'
      },
      {
        "id": 8,
        "name": 'L36093.SXF',
        "edition": '1.0',
        "class_abbr": 'ЭТКОВ',
        "scale": 50000,
        "type": 'SXF',
        "title": 'КРАСНОГВАРДЕЙСКОЕ',
        "size": '1.09 МБ',
        "creator": '21.03.2019'
      },
      {
        "id": 9,
        "name": 'L36068.SXF',
        "edition": '1.0',
        "class_abbr": 'ЦТКВ',
        "scale": 50000,
        "type": 'SXF',
        "title": 'АРМЯНСК',
        "size": '10.59 МБ',
        "creator": '21.03.2019'
      },
      {
        "id": 10,
        "name": 'L36105.SXF',
        "edition": '1.0',
        "class_abbr": 'ЭТКОВ',
        "scale": 50000,
        "type": 'SXF',
        "title": 'ГВАРДЕЙСКОЕ',
        "size": '10.7 МБ',
        "creator": '21.03.2019'
      }
    ]
  )
})

const taskList = [
  {
    id: 1,
    status: 'processing',
    updated: '12.06.2019',
    type: 'Уточнение ГЦМР'
  },
  {
    id: 2,
    status: 'processing',
    updated: '13.06.2019',
    type: 'Уточнение ГЦМР'
  },
  {
    id: 3,
    status: 'processing',
    updated: '14.06.2019',
    type: 'Уточнение ГЦМР'
  },
  {
    id: 4,
    status: 'processing',
    updated: '15.06.2019',
    type: 'Уточнение ГЦМР'
  },
  {
    id: 5,
    status: 'processing',
    updated: '16.06.2019',
    type: 'Уточнение ГЦМР'
  }
]

app.post('/taskList', (req, res) => {
  res.json(taskList)
})

app.post('/create_task', (req, res) => {
  const id = taskList.length + 1;
  const newTask = {
    id: id,
    status: 'processing',
    updated: '18.06.2019',
    type: 'Уточнение ГЦМР'
  }
  taskList.push(newTask);
  res.json(newTask);
})


app.post('/get_task_types', (req, res) => {
  res.json(
    [
      {
        id: 1,
        type_name: 'Уточнение ГЦМР'
      },
      {
        id: 2,
        type_name: 'Объекты ГПИ'
      },
      {
        id: 3,
        type_name: 'Экспорт растра высот'
      },
      {
        id: 4,
        type_name: 'Каталог'
      }
  ])
})


var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({ port: 40510 })

  wss.on('connection', function (ws) {
    
    ws.on('message', function (message) {
      console.log('установлено', message)
    })
  
    function randomInteger(min, max) {
      var rand = min - 0.5 + Math.random() * (max - min + 1)
      rand = Math.round(rand);
      return rand;
    }

  setInterval(() => {
    
    const selectRandomElement = taskList[randomInteger(0, 4)]

    const res = {
      id: selectRandomElement.id,
      status: Math.random() > 0.5 ? "success" : "warning"
    }

    ws.send(JSON.stringify(res))
  }, 2000)
})


app.listen(5000, () => {
  console.log("Server listening on port 5000!");
});
