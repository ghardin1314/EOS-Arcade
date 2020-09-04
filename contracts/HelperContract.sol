pragma solidity >=0.4.22 <0.7.0;

contract HelperContract {

        // TODO: input and return correct data
    function sort(Score[] memory data) internal pure returns(Score[]) {
       quickSort(data, int(0), int(data.length - 1));
       return data;
    }
    
    // TODO: check if this actually runs
    function quickSort(Score[] memory arr, int left, int right) internal pure {
        int i = left;
        int j = right;
        if(i==j) return;
        uint pivot = arr[uint(left + (right - left) / 2)].score;
        while (i <= j) {
            while (arr[uint(i)].score < pivot) i++;
            while (pivot < arr[uint(j)].score) j--;
            if (i <= j) {
                (arr[uint(i)].score, arr[uint(j)].score) = (arr[uint(j)].score, arr[uint(i)].score);
                i++;
                j--;
            }
        }
        if (left < j)
            quickSort(arr, left, j);
        if (i < right)
            quickSort(arr, i, right);
    }

    function getArraySum(uint[] _array) 
        public 
        pure 
        returns (uint sum_) 
    {
        sum_ = 0;
        for (uint i = 0; i < _array.length; i++) {
            sum_ += _array[i];
        }
    }
}