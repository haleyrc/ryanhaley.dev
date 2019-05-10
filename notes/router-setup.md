---
author: "Ryan Haley"
date: "2013-02-11"
title: Custom Home Router Setup, Part 1
---

For a long time, I have been using the same Linksys WRT-54g wireless router to serve my small home network. Unfortunately, as more devices on the network are gigabit capable, and as the sheer number of attached devices has increased, the Linksys is starting to show some strain. This series of posts will highlight the process I underwent to set up a custom home router on top of an extra PC I had lying around both as a record for myself, and hopefully instruction for others considering the same project.

For my set up, I am using:

* Fedora 17
* [TRENDnet 8-Port Unmanaged Gigabit GREENnet Switch](http://www.amazon.com/gp/product/B001QUA6RA/)
* iptables
* dnsmasq

Wireless Routing
----------------

### Step 1 - Determine if the wireless adapter supports Master (access point) mode. 

{% highlight bash %}
    $ iwconfig -a
    $ lspci
    $ yum install iw hostapd -y
    $ iw list
{% endhighlight %}

Check for:

{% highlight bash %}
    Support interface modes:
    ...
    * AP
    ...
{% endhighlight %}

### Step 2 - Enable and configure hostapd

{% highlight bash %}
    $ touch hostapd.conf
    $ hostapd hostapd.conf                      # Test config file
    $ service NetworkManger stop                # Turn off NetworkManager
    $ chkconfig NetworkManager off              # Disable auto startup
    $ cp hostapd.conf /etc/hostapd/hostapd.conf
    $ service hostapd start                     # Start hostapd now
    $ chkconfig hostapd on                      # Set to start at boot
{% endhighlight %}

Test connection to the wireless AP from any device. The device will not receive an IP address at this point, but the AP should be visible.

### Step 3 - Assign a subnet to the wireless network

{% highlight bash %}
    $ ifconfig wlan0 192.168.2.1 netmask 255.255.255.0
{% endhighlight %}

### Step 4 - Install and configure dnsmasq

{% highlight bash %}
    $ yum install dnsmasq -y
    $ nano /etc/dnsmasq.conf
{% endhighlight %}

Edit the config file to add:

{% highlight bash %}
    interface=wlan0
    dhcp-range=192.168.2.100,192.168.2.250,72h
{% endhighlight %}

Restart dnsmasq

{% highlight bash %}
    $ service dnsmasq restart
{% endhighlight %}

Connect to the AP again and check that an IP address is correctly assigned. Finally, set dnsmasq to run on startup.

{% highlight bash %}
    $ chkconfig dnsmasq on
{% endhighlight %}

### Step 5 - Set up packet and IP forwarding

{% highlight bash %}
    $ iptables -A FORWARD -i wlan0 -s 192.168.2.0/255.255.255.0 -j ACCEPT
    $ iptables -A FORWARD -i em1 -d 192.168.2.0/255.255.255.0 -j ACCEPT
    $ iptables -t nat -A POSTROUTING -o em1 -j MASQUERADE
    $ echo 1 > /proc/sys/net/ipv4/ip_forward
{% endhighlight %}

### Step 6 - Set up some basic firewall rules

{% highlight bash %}
    # Allow loopback traffic
    $ iptables -I INPUT -i lo -j ACCEPT                                
    # Allow internal traffic to router
    $ iptables -I INPUT -i wlan0 -j ACCEPT                             
    # Allow connections initiated from router
    $ iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT 
    # Allow ssh connections to router
    $ iptables -A INPUT -p tcp --dport 22 -i em1 -j ACCEPT             
    # Establish default rules
    $ iptables -P INPUT DROP                                           
    $ iptables -P OUTPUT ACCEPT
    $ iptables -P FORWARD DROP
{% endhighlight %}

### Step 7 - Enable ip forwarding permanently

{% highlight bash %}
    $ nano /etc/sysctl.conf
{% endhighlight %}

Change

{% highlight bash %}
    net.ipv4.ip_forward = 0
{% endhighlight %}

to

{% highlight bash %}
    net.ipv4.ip_forward = 1
{% endhighlight %}

### Step 8 - Save iptables rules

{% highlight bash %}
    $ iptables-save > ~/iptables.save # Save to file for backup
    $ iptables-save                   # Save to system
{% endhighlight %}

### Step 9 - Set up MAC-to-static-IP bindings

{% highlight bash %}
    $ nano /etc/dnsmasq.conf
{% endhighlight %}

For each MAC/IP combo, add a line like:

{% highlight bash %}
    dhcp-host=AA:BB:CC:DD:EE:FF,192.168.2.110
{% endhighlight %}

Restart the dnsmasq service.

{% highlight bash %}
    $ service dnsmasq restart
{% endhighlight %}

This concludes this portion of the tutorial, and at this point you should have nearly all the workings of a basic wireless router. The next section will focus on getting the wired side up, which follows nearly the same series of steps, but will be included for completeness.

As I add additional services or scripts, I will continue to update this series. For now, there are a couple final lines which I would like to eventually include in a web-based admin interface and are included here as a reminder:

{% highlight bash %}
    # Get current lease ip addresses
    $ awk '{ print $3 }' /var/lib/dnsmasq/dnsmasq.leases 
    # Get current lease hostnames
    $ awk '{ print $4 }' /var/lib/dnsmasq/dnsmasq.leases 
{% endhighlight %}
