import java.util.*;
import java.lang.*;


class Person {
  public String name;
}

class Employee extends Person {
  public int price;
}

class Manager extends Employee { }

class Product {
  public String name;
  public String price;
}

class Main {
  public static void main(String args[]) {
    fun(new Product()); // no error
    fun(new Employee()); // error: incompatible types: Employee cannot be converted to Product

  }
  public static void fun(Product a) {}
}
