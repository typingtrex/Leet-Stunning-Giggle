class Solution {
    public boolean isPalindrome(int x) {
        int one = 0;
        int two = 0;

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
            one = ary.get(i);
            two = ary.get(ary.size() - 1 - i);

            if (one != two) {
                return false;
            }
        }
        return true;
    }
}