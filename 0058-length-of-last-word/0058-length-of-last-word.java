class Solution {
    public int lengthOfLastWord(String s) {
        String[] aryOfWords = s.split(" ");
        return aryOfWords[aryOfWords.length - 1].length();
    }
}