// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract FruitTraceability {
    struct FarmerInfo {
        string productName;
        string originFarm;
        string farmerName;
        uint256 harvestDate;
    }

    struct TransportInfo {
        string transporterName;
        string transportDetails;
        uint256 transportDate;
    }

    struct WarehouseInfo {
        string warehouseName;
        string warehouseDetails;
        uint256 warehouseDate;
    }

    struct RetailInfo {
        string retailerName;
        string retailStore;
        uint256 retailDate;
    }

    struct Batch {
        string batchId;
        FarmerInfo farmer;
        TransportInfo transport;
        WarehouseInfo warehouse;
        RetailInfo retailer;

        string currentOwner;
        string status;
        uint256 lastUpdated;
    }

    mapping(string => Batch) public batches;
    mapping(string => string[]) public farmerToBatchIds;

    uint256 public batchCounter;

    // ✅ Events
    event BatchAdded(string batchId);
    event BatchUpdated(string batchId, string newOwner, string status);

    // ✅ Modifier to check existence
    modifier batchExists(string memory batchId) {
        require(bytes(batches[batchId].batchId).length != 0, "Batch does not exist");
        _;
    }

    // ✅ Add batch by farmer
    function addBatch(
        string memory productName,
        string memory originFarm,
        string memory farmerName,
        uint256 harvestDate
    ) public {
        batchCounter++;
        string memory batchId = toString(batchCounter);

        FarmerInfo memory farmer = FarmerInfo({
            productName: productName,
            originFarm: originFarm,
            farmerName: farmerName,
            harvestDate: harvestDate
        });

        batches[batchId] = Batch({
            batchId: batchId,
            farmer: farmer,
            transport: TransportInfo("", "", 0),
            warehouse: WarehouseInfo("", "", 0),
            retailer: RetailInfo("", "", 0),
            currentOwner: farmerName,
            status: "Harvested",
            lastUpdated: block.timestamp
        });

        farmerToBatchIds[farmerName].push(batchId);
        emit BatchAdded(batchId);
    }

    function updateTransportInfo(
        string memory batchId,
        string memory transporterName,
        string memory transportDetails,
        uint256 transportDate
    ) public batchExists(batchId) {
        Batch storage b = batches[batchId];
        b.transport = TransportInfo(transporterName, transportDetails, transportDate);
        b.currentOwner = transporterName;
        b.status = "In Transit";
        b.lastUpdated = block.timestamp;
        emit BatchUpdated(batchId, transporterName, "In Transit");
    }

    function updateWarehouseInfo(
        string memory batchId,
        string memory warehouseName,
        string memory warehouseDetails,
        uint256 warehouseDate
    ) public batchExists(batchId) {
        Batch storage b = batches[batchId];
        b.warehouse = WarehouseInfo(warehouseName, warehouseDetails, warehouseDate);
        b.currentOwner = warehouseName;
        b.status = "Stored";
        b.lastUpdated = block.timestamp;
        emit BatchUpdated(batchId, warehouseName, "Stored");
    }

    function updateRetailerInfo(
        string memory batchId,
        string memory retailerName,
        string memory retailStore,
        uint256 retailDate
    ) public batchExists(batchId) {
        Batch storage b = batches[batchId];
        b.retailer = RetailInfo(retailerName, retailStore, retailDate);
        b.currentOwner = retailerName;
        b.status = "Sold";
        b.lastUpdated = block.timestamp;
        emit BatchUpdated(batchId, retailerName, "Sold");
    }

    function getBatchesByFarmer(string memory farmerName) public view returns (string[] memory) {
        return farmerToBatchIds[farmerName];
    }

    // Utility
    function toString(uint256 value) internal pure returns (string memory) {
        if (value == 0) return "0";
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + value % 10));
            value /= 10;
        }
        return string(buffer);
    }
}