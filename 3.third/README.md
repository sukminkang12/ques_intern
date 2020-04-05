I fixed Oracle database 
==========================
- password expiration is unlimited now.
- add some special commands.
- help you can see column more easier.

How to use this?
============================
First, you pull "all files" on your local directory from this hub.

Second, aceess to https://drive.google.com/open?id=1urT8EoKHHR_hWYWXTbGRx7QWqGX7_zdr, and download 'mount.zip'.

And, access to https://www.oracle.com/technetwork/database/database-technologies/express-edition/downloads/index.html. 

Download 'Oracle Database Express Edition (XE) Release 18.4.0.0.0 (18c) for Linux x64'

Did you finished it? Let's start ! 

Build using Dockerfile.xe

<pre><code> $ docker build -t myoracle -f Dockerfile.xe .</code></pre>

Maybe .. it takes too long times... Keep on your mind. And, Run container 

<pre><code> $ docker run --name my-oracle-xe -p 2222:1521 -e ORACLE_PWD=1 -e NLS_LANG=KOREAN_KOREA.AL32UTF8 -v $PWD/mount/data:/opt/oracle/oradata myoracle </code></pre>

If you finished it SUCCESSFULLY, you can see it 

<pre><code> The Oracle base remains unchanged with value /opt/oracle
#########################
DATABASE IS READY TO USE!
#########################
The following output is now a tail of the alert.log:
XEPDB1(3):Undo initialization online undo segments: err:0 start: 174569 end: 174675 diff: 106 ms (0.1 seconds)
XEPDB1(3):Undo initialization finished serial:0 start:174528 end:174682 diff:154 ms (0.2 seconds)
XEPDB1(3):Database Characterset for XEPDB1 is AL32UTF8
2020-01-17T01:04:05.127296+00:00
XEPDB1(3):Opening pdb with Resource Manager plan: DEFAULT_PLAN
Pluggable database XEPDB1 opened read write
Starting background process CJQ0
2020-01-17T01:04:05.640294+00:00
CJQ0 started with pid=43, OS id=281
Completed: ALTER DATABASE OPEN
2020-01-17T01:04:07.150665+00:00
Shared IO Pool defaulting to 24MB. Trying to get it from Buffer Cache for process 87.
===========================================================
Dumping current patch information
===========================================================
No patches have been applied
=========================================================== </code></pre>

How to use "SQL PLUS"
======================

If your conatiner(above) is alive, you can use SQL PLUS using some command.

<pre><code> $ docker exec -it my-oracle-xe sqlplus system/1@//localhost:1521/XE </code></pre>

And you just doing ALL command of SQL PLUS. Just enjoy it.

And not only 'system' but also 'ques','quesSecure' that you can use.(password is 1).

Some Special Commands FOR THIS.
===========================

I made some commands(like functions,procedure.. ) for you. if you use it, you have to mount all files(in hub) to your local directory successfully.

Anyway, i show you SSC.

this command's name is master_key. as you know, "master key" is super key. Anyway let's Look into..

1) Insert

<pre><code> $ exec master_key('your_table','insert','parameter1'~'parameter4'); </code></pre>

this command is Insert some data to table. you just write some word such as 'table name','parameter'.. I think it easy than formal 'insert command'.

2) Update

<pre><code> $ exec master_key('your_table','update','condition1','condition2',' ',' '); </code></pre>

this command is Update some data of table. original is "update table set [condition1] where [condition2]". if you use it, you just write two condition.

3) Delete
<pre><code> $ exec master_key('your_table','delete','condition1',' ',' ',' ');</code></pre>

this command is Delete some data of table. orgianl is "delete table where [condition1]". you can use DELETE of sqlplus using more easier command.
