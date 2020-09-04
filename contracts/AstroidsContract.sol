pragma solidity >=0.4.22 <0.7.0;

import "./HelperContract.sol"
import "@openzeppelin/contracts/ownership/Ownable.sol";

contract AstroidsGame is HelperContract, Ownable {

    constructor() internal {
        // Update this with decay function?
        updatePayoutStruct(uint[] _weights = [40,30,20,10])
    }

    struct Player {
        string userName;
        address account;
    }

    struct Score {
        uint256 score;
        string userName;
        address account;
        uint256 dateTime;
    }

    int[] public PayoutWeights

    Score[] public AllTopScores;
    Score[] public MonthTopScores;

    function updatePayoutStruct(uint[] _weights) public {
        require (getArraySum(_weights)==100);
        storage PayoutWeights = _weights;
    }

    function createScore(uint256 memory _score, string memory _userName, address memory _account) public { 
        memory _dateTime = now
        AllTopScores.push(Score(_score, _username, _account, _dateTime))
        MonthTopScores.push(Score(_score, _username, _account, _dateTime))
        emit newScore()
    }

    event newScore() 

    function payoutMonthTopScores() onlyOwner public {
        Score _rankedTopScore

        _rankedTopScore = sort(MonthTopScores);

        // TODO: Payout logic

        _clearMonthScores()
    }

    function _clearMonthScores() onlyOwner private {
        delete MonthTopScores;
    }

    function getAllScores() public view returns(struct) {
        return(AllTopScores)
    }

    function getMonthScores() public view returns(struct) {
        return(MonthTopScores)
    }


}

