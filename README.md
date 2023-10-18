# Git Interactive Rebase Learning Hour exercise

Imagine your have been working on this code and you have been doing multiple commits "for you" in Tennis1.js. The sequence of commits as it is it's hard to understand by anyone else, so you have decided to clean your commits before pushing.

## 1. Change message
There's a commit message which seems really verbose and opinionated, change the message so the content is more clear and objective.
## 2. Move
There’s a commit which deletes all the tennis Katas in Emily’s repo except for the Javascript-Jest one. This commit is one of the last ones, but it would make more sense before the whole refactoring, move that commit to the beginning.
## 3. Delete
There's a commit that’s fixing an error introduced in another one. Remove both commits as there’s no point in keeping them.
## 4. Join
There are some commits which are very small and fine grained. All of a sudden you feel the urge to merge them together in one single commit with a higher level of abstraction.
Compact some small commits into a bigger one.
## 5. Split
A change related to evenResult function slipped into the commit "Refactor late game result to use array". Can you move it to the previous commit?

## Concepts to practice at every step
Look at them only if you need help 😛.
<details>
           <summary>Change message</summary>
           <p>Rewrite via <a href="https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History">interactive rebase</a></p>
</details>
<details>
           <summary>Move</summary>
           <p>Move via <a href="https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History">interactive rebase</a></p>
</details>
<details>
           <summary>Delete</summary>
           <p>Drop via <a href="https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History">interactive rebase</a></p>
</details>
<details>
           <summary>Join</summary>
           <p>Squash or fixup via <a href="https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History">interactive rebase</a></p>
</details>
<details>
           <summary>Split</summary>
           <p><a href="https://stackoverflow.com/questions/6217156/break-a-previous-commit-into-multiple-commits">Split a commit</a> (be sure to use the commit previous to the one you wanna break) and fixup via <a href="https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History">interactive rebase</a></p>
</details>

> Built on top of [Emily Bache's Tennis kata](https://github.com/emilybache/Tennis-Refactoring-Kata), thanks Emily for sharing so much 🙌🙌.
> Here you have her repo readme in case it helps you grab the context of the exercise:

# Tennis Refactoring Kata

Imagine you work for a consultancy company, and one of your colleagues has been doing some work for the Tennis Society. The contract is for 10 hours billable work, and your colleague has spent 8.5 hours working on it. Unfortunately he has now fallen ill. He says he has completed the work, and the tests all pass. Your boss has asked you to take over from him. She wants you to spend an hour or so on the code so she can bill the client for the full 10 hours. She instructs you to tidy up the code a little and perhaps make some notes so you can give your colleague some feedback on his chosen design. You should also prepare to talk to your boss about the value of this refactoring work, over and above the extra billable hours.

There are three versions of this refactoring kata, each with their own design smells and challenges. I suggest you start with the first one, with the class "TennisGame1". The test suite provided is fairly comprehensive, and fast to run. You should not need to change the tests, only run them often as you refactor.

If you like this Kata, you may be interested in [my books](https://leanpub.com/u/emilybache) and website [SammanCoaching.org](https://sammancoaching.org)

## Kata Description

Here is a description of the problem this code is designed to solve: [Tennis Kata](https://sammancoaching.org/kata_descriptions/tennis.html).

## Questions to discuss afterwards

* How did it feel to work with such fast, comprehensive tests?
* Did you make mistakes while refactoring that were caught by the tests?
* If you used a tool to record your test runs, review it. Could you have taken smaller steps? Made fewer refactoring mistakes?
* Did you ever make any refactoring mistakes and then back out your changes? How did it feel to throw away code?
* What would you say to your colleague if they had written this code?
* What would you say to your boss about the value of this refactoring work? Was there more reason to do it over and above the extra billable hour or so?


Credits: Kata created while working for [Volcanic Internet](https://volcanicinternet.com/en/).
