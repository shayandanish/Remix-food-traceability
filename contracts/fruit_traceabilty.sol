// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FruitTraceability {

    struct Batch {
        string batchId;
        string origin;
        string currentOwner;
        string status;
        uint timestamp;
    }

    mapping(string => Batch) public batches;

    function addBatch(string memory _id, string memory _origin, string memory _owner) public {
        batches[_id] = Batch(_id, _origin, _owner, "Harvested", block.timestamp);
    }

    function updateStatus(string memory _id, string memory _newStatus, string memory _newOwner) public {
        batches[_id].status = _newStatus;
        batches[_id].currentOwner = _newOwner;
        batches[_id].timestamp = block.timestamp;
    }

    function getBatch(string memory _id) public view returns (Batch memory) {
        return batches[_id];
    }
}