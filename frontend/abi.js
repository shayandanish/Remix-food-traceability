const contractAddress = "0x24842fcf5e03ba5b9ec1bd48a9188f0a87c9b2f8";
const abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "productName",
        type: "string",
      },
      {
        internalType: "string",
        name: "originFarm",
        type: "string",
      },
      {
        internalType: "string",
        name: "farmerName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "harvestDate",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "quality",
        type: "string",
      },
    ],
    name: "addBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "batchId",
        type: "string",
      },
    ],
    name: "BatchAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "batchId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "newOwner",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "status",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "quality",
        type: "string",
      },
    ],
    name: "BatchUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "batchId",
        type: "string",
      },
      {
        internalType: "string",
        name: "retailerName",
        type: "string",
      },
      {
        internalType: "string",
        name: "retailStore",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "retailDate",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "quality",
        type: "string",
      },
    ],
    name: "updateRetailerInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "batchId",
        type: "string",
      },
      {
        internalType: "string",
        name: "transporterName",
        type: "string",
      },
      {
        internalType: "string",
        name: "transportDetails",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "transportDate",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "quality",
        type: "string",
      },
    ],
    name: "updateTransportInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "batchId",
        type: "string",
      },
      {
        internalType: "string",
        name: "warehouseName",
        type: "string",
      },
      {
        internalType: "string",
        name: "warehouseDetails",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "warehouseDate",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "quality",
        type: "string",
      },
    ],
    name: "updateWarehouseInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "batchCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "batches",
    outputs: [
      {
        internalType: "string",
        name: "batchId",
        type: "string",
      },
      {
        components: [
          {
            internalType: "string",
            name: "productName",
            type: "string",
          },
          {
            internalType: "string",
            name: "originFarm",
            type: "string",
          },
          {
            internalType: "string",
            name: "farmerName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "harvestDate",
            type: "uint256",
          },
        ],
        internalType: "struct FruitTraceability.FarmerInfo",
        name: "farmer",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "string",
            name: "transporterName",
            type: "string",
          },
          {
            internalType: "string",
            name: "transportDetails",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "transportDate",
            type: "uint256",
          },
        ],
        internalType: "struct FruitTraceability.TransportInfo",
        name: "transport",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "string",
            name: "warehouseName",
            type: "string",
          },
          {
            internalType: "string",
            name: "warehouseDetails",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "warehouseDate",
            type: "uint256",
          },
        ],
        internalType: "struct FruitTraceability.WarehouseInfo",
        name: "warehouse",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "string",
            name: "retailerName",
            type: "string",
          },
          {
            internalType: "string",
            name: "retailStore",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "retailDate",
            type: "uint256",
          },
        ],
        internalType: "struct FruitTraceability.RetailInfo",
        name: "retailer",
        type: "tuple",
      },
      {
        internalType: "string",
        name: "quality",
        type: "string",
      },
      {
        internalType: "string",
        name: "currentOwner",
        type: "string",
      },
      {
        internalType: "string",
        name: "status",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "lastUpdated",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "farmerToBatchIds",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "farmerName",
        type: "string",
      },
    ],
    name: "getBatchesByFarmer",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
