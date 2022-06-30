# MetaMask clickjacking Proof of Concept
<p>
  <a href="https://twitter.com/intent/follow?screen_name=gregxsunday" title="Follow"><img src="https://img.shields.io/twitter/follow/gregxsunday?label=gregxsunday&style=social"></a>
<a href="https://www.youtube.com/c/BugBountyReportsExplained?sub_confirmation=1" title="Subscribe"><img alt="YouTube Channel Subscribers" src="https://img.shields.io/youtube/channel/subscribers/UCZDyl7G-Lq-EMVO8PfDFp9g?style=social"></a>
</p>

![MetaMask - stealing ETH by exploiting clickjacking - $120,000 bug bounty](https://bucket.mlcdn.com/a/2951/2951926/images/6de3fd2c2c8a7f9fe22cfe5681989dbade3fa485.png)
[MetaMask - stealing ETH by exploiting clickjacking - $120,000 bug bounty](https://youtu.be/HnI0w156rtw)

This repository is a PoC of MetaMask clickjacking bug explained in the above video. Note that it's not made to be universal - there are hardcoded things like screen resolution and my test wallet address so it won't instantly work for you and buttons may not be aligned.

## Running the app
```
yarn install
static-server dist
```
