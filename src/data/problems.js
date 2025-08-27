// src/data/problems.js
export const problems = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      }
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹"
    ],
    tags: ["Array", "Hash Table"],
    acceptance: "49.1%",
    submissions: "3.2M"
  },
  {
    id: 2,
    title: "Valid Parentheses",
    difficulty: "Easy",
    description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    examples: [
      {
        input: 's = "()"',
        output: "true"
      },
      {
        input: 's = "()[]{}"',
        output: "true"
      },
      {
        input: 's = "(]"',
        output: "false"
      }
    ],
    constraints: [
      "1 ≤ s.length ≤ 10⁴",
      "s consists of parentheses only '()[]{}'."
    ],
    tags: ["String", "Stack"],
    acceptance: "40.1%",
    submissions: "2.8M"
  },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    description: "Given a string s, find the length of the longest substring without repeating characters.",
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: 'The answer is "abc", with the length of 3.'
      },
      {
        input: 's = "bbbbb"',
        output: "1",
        explanation: 'The answer is "b", with the length of 1.'
      }
    ],
    constraints: [
      "0 ≤ s.length ≤ 5 * 10⁴",
      "s consists of English letters, digits, symbols and spaces."
    ],
    tags: ["Hash Table", "String", "Sliding Window"],
    acceptance: "33.8%",
    submissions: "4.5M"
  },
  {
    id: 4,
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    description: "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list.",
    examples: [
      {
        input: "list1 = [1,2,4], list2 = [1,3,4]",
        output: "[1,1,2,3,4,4]"
      }
    ],
    constraints: [
      "The number of nodes in both lists is in the range [0, 50].",
      "-100 ≤ Node.val ≤ 100"
    ],
    tags: ["Linked List", "Recursion"],
    acceptance: "62.1%",
    submissions: "2.1M"
  },
  {
    id: 5,
    title: "Maximum Subarray",
    difficulty: "Medium",
    description: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: 'The subarray [4,-1,2,1] has the largest sum 6.'
      }
    ],
    constraints: [
      "1 ≤ nums.length ≤ 10⁵",
      "-10⁴ ≤ nums[i] ≤ 10⁴"
    ],
    tags: ["Array", "Divide and Conquer", "Dynamic Programming"],
    acceptance: "49.5%",
    submissions: "3.8M"
  },
  {
    id: 6,
    title: "Binary Tree Inorder Traversal",
    difficulty: "Easy",
    description: "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    examples: [
      {
        input: "root = [1,null,2,3]",
        output: "[1,3,2]"
      }
    ],
    constraints: [
      "The number of nodes in the tree is in the range [0, 100].",
      "-100 ≤ Node.val ≤ 100"
    ],
    tags: ["Stack", "Tree", "Depth-First Search"],
    acceptance: "74.4%",
    submissions: "1.9M"
  }
];