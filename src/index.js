importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// defining the Express app
const app = express();

const LEN = 20;
const splitInfo = new Array(LEN);

let payload = {
    ID: 1308,
    Amount: 12580,
    Currency: "NGN",
    CustomerEmail: "damilare@customers.io",
    splitInfo: [
        {
            "SplitType": "FLAT",
            "SplitValue": 45,
            "SplitEntityId" : "LNPYACC0019"
        },
        {
          "SplitType": "RATIO",
          "SplitValue": 3,
          "SplitEntityId": "LNPYACC0011"
      },
      {
          "SplitType": "PERCENTAGE",
          "SplitValue": 3,
          "SplitEntityId": "LNPYACC0015"
      }
    ]
};

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all payload
app.get('/', (req, res) => {
    res.send(payload);
});


// starting the server
app.listen(3001, () => {
    console.log('listening on port 3001');
});

function calcPrecedence() {
  SplitType = ["FLAT", "PERCENTAGE", "RATIO"];
  SplitType.sort();

  if (SplitType == "FLAT") {
      var Amount = Amount - SplitValue;
      var Balance = Amount;
  } else if (SplitType == "PERCENTAGE") {
      var Amount = Amount - (SplitValue / 100 * amount);
      var Balance = Amount;
  } else if (SplitType == "RATIO") {
      var RATIOS = 0;
      RATIOS += RATIO;
      var Amount = Amount - (RATIO / RATIOS);
      var Balance = Amount
  } else if (SplitType == "FLAT" && SplitType == "PERCENTAGE") {
      do {
          var Amount = Amount - SplitValue;

      } while (SplitType != "FLAT");

      var Amount = Amount - (SplitValue / 100 * amount);
      var Balance = Amount;

  } else if (SplitType == "FLAT" && SplitType == "RATIO") {
      do {
          var Amount = Amount - SplitValue;

      } while (SplitType != "FLAT");

      var Amount = Amount - (SplitValue / 100 * amount);
      var Balance = Amount

  } else if (SplitType == "PERCENTAGE" && SplitType == "RATIO") {
      do {
          var Amount = Amount - (SplitValue / 100 * amount);

      } while (SplitType != "PERCENTAGE");

      var RATIOS = 0;
      RATIOS += RATIO;
      var Amount = Amount - (RATIO / RATIOS);
      var Balance = Amount

  } else if (SplitType == "FLAT" && SplitType == "PERCENTAGE" && SplitType == "RATIO") {
      do {
          var Amount = Amount - SplitValue;

      } while (SplitType != "FLAT");

      do {
        Amount = Amount - (SplitValue / 100 * amount);

      } while (SplitType != "PERCENTAGE");

      var RATIOS = 0;
      RATIOS += RATIO;
      var Amount = Amount - (RATIO / RATIOS);
      var Balance = Amount
  }

}


/transactions/models/transactions.model.js;
const transactionSchema = new Schema({
    "ID": ID.value,
    "Balance": Balance.value,
    "SplitBreakdown": [
        {
            "SplitEntityId": "SplitEntityId.value",
            "Amount": Amount.value
        }
    ]
});

const transaction model = mongoose.model('Transactions', transactionSchema);

app.post('/split-payments/compute',[
	TransactionsController.insert
           ]);

exports.insert = (req, res) => {
	req.body.ID = ID.value;
	req.body.Balance = Balance.value;
	TransactionModel.createTransaction(req.body).then((result) => {
	res.status(201).send({id: result._id});
	});
};