using System;

namespace Task1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter the size of array: ");
            string countStr = Console.ReadLine();
            int count = Convert.ToInt32(countStr);
            string[] names = new string[count];

            for (int i = 0; i < names.Length; i++)
            {
                Console.Write("Enter a name: ");
                string name = Console.ReadLine();
                names[i] = name;

            }
            Console.WriteLine("-----------------------");
            foreach (var name in names)
            {
                Console.WriteLine(name);
            }
        }
    }
}