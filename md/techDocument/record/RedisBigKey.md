# Redis大Key解决方案
## 产生
Redis大key的产生一般都涉及到对应的value非常大。比如对应的一个业务场景的一个key存储了很多的用户信息等，这样的value就会非常大，就会产生对应的大key，一般大小在10kb以上就认为是

## 影响
产生Redis的大Key有什么影响呢？
因为Redis是单线程，所以会产生客户端的阻塞现象，那么查询的越多，阻塞的也就越严重，就会产生redis的慢查询现象。

并且对于集群来说，他的这个slot分片均匀的情况下，查询会出现倾斜，并且部分大Key会导致Redis节点占用的内存多，从而导致QPS过高。

同样对于大key来说，网络传输也是一个问题，因为这个大key产生的网络流量很大，我们都知道分布式系统主要影响速度的就是网络方面。
打个比方，如果一个key的大小是1mb，每秒访问1000次，也就是每秒产生1000MB的流量，势必会导致网络拥塞。
而我们知道对于TCP来说，如果传输失败，那么会引发他的超时重传，这样下来，一个接口的请求速度势必会放慢。这对于服务器来说是灾难性的。

## 检测
在Redis4.0以后，可以直接进行对应的大Key进行扫描，如scan + memory usage命令，但是这个扫描过程会遍历扫描，如果你的key非常多的话，就会非常慢。

也可以使用一些第三方的工具进行扫描。比如rdbtools

## 删除
一般情况下不能够直接使用del直接删除对应的大key，因为一般一个大key都是一个集合，那么删除的时间复杂度就是这个集合的大小。
所以对于大key，删除会非常耗费时间，可能会产生阻塞，影响其他查询效率。

所以我们可以分批次进行扫描+删除。

