public class FactorialCalculator {

    public static int factorial(int n) {
        if (n == 0)
            return 1;
        else
            return n * factorial(n); // Incorrect recursion call leads to infinite recursion
    }

    public static void main(String[] args) {
        int result = factorial(5);
        System.out.println("Factorial of 5 is: " + result);
    }
}