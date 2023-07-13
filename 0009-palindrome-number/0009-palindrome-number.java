class Solution {
    public boolean isPalindrome(int x) {
    

        if (x < 0) {
            return false;
        }

        // use ArrayList
        ArrayList<Integer> ary = new ArrayList();

        // turn int into int[]
        while (x != 0) {
            ary.add(x % 10); 
            x = x/10;
        }
        for (int i = 0; i < ary.size()/2; i++) {
            int one = ary.get(i);
            int two = ary.get(ary.size() - 1 - i);

            if (one != two) {
                return false;
            }
        }
        return true;
    }
}