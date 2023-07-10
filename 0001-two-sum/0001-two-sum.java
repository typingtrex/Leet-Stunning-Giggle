class Solution {
    public int[] twoSum(int[] nums, int target) {

        /*
            Loop through nums
                Loop through nums starting at next element
                    If they equal target, return
        */
        // This single line

        for (int i = 0; i < nums.length; i++) {
            for (int j = i+1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    // int[] returnValue = new int[2];
                    // returnValue[0] = i;
                    // returnValue[1] = j;

                    int[] returnValue = new int[]{i, j};
                    return returnValue;
                }
            }
        }

        LinkedList<String> myList = new LinkedList<String>();
        myList.add("hello!");
        myList.add("world!");
        String[] ary = new String[myList.size()];
        return new int[0];
    }
}

