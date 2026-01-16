## Intro to Web Development - Code Samples Repository - Setup Instructions

### Git & VS Code Installation

If you already have Git and VS Code installed and SSH keys set up, you can skip to the next section.

1. Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

2. Download [VS Code](https://code.visualstudio.com/) as your code editor.

   - Set Up VS Code to [launch from the command line](https://code.visualstudio.com/docs/editor/command-line#_launching-from-command-line).

   - Install the following extensions:
     - Live Server
     - Git Lens
     - Prettier

3. Sign up for a GitHub account and the [GitHub Student Pack](https://education.github.com/pack).

4. Set up [SSH keys for GitHub](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/connecting-to-github-with-ssh).

### Setting up the Code Samples Repository (with SSH)

1. For this repository, you only need to make a copy on your machine. You don't need to create a remote repository to push any of the code to.

2. As such, you can either fork the repo and make a clone of the forked repo or clone the given repo. 

3. To fork and clone, click the "fork" button. This will create a public forked repository directly in your GitHub account.

```console
$ git clone git@github.com:student/student-code-samples-forked-repository.git <folder-name>

Cloning into '<folder-name>'...
remote: Enumerating objects: 163, done.
remote: Counting objects: 100% (163/163), done.
remote: Compressing objects: 100% (93/93), done.
remote: Total 163 (delta 80), reused 136 (delta 61), pack-reused 0
Receiving objects: 100% (163/163), 68.15 KiB | 2.20 MiB/s, done.
Resolving deltas: 100% (80/80), done.

```

4. To clone, navigate to your preferred folder and clone the repo. Use any folder name for <folder-name>. 

```console
$ git clone git@github.com:caterinasworld/webdev-code-samples.git <folder-name>

Cloning into '<folder-name>'...
remote: Enumerating objects: 163, done.
remote: Counting objects: 100% (163/163), done.
remote: Compressing objects: 100% (93/93), done.
remote: Total 163 (delta 80), reused 136 (delta 61), pack-reused 0
Receiving objects: 100% (163/163), 68.15 KiB | 2.20 MiB/s, done.
Resolving deltas: 100% (80/80), done.

```
