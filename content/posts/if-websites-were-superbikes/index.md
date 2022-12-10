---
title: "If Websites Were Superbikes: Comparing the Performance of IAM Group Websites"
authors: ["Danny Holmes"]
date: 2020-12-12T09:19:17Z
publishDate: 2020-12-12T09:19:17Z
lastmod: 2020-01-16T09:19:17Z
expiryDate:
summary:
tags: [ "one", "two"] 
keywords: cornering, courses
aliases:
    - 
draft: true
datatables: true
---

Motor manufacturers invest a lot of time and money in racing. They do so because it teaches teamwork and allows engineers to develop quickly in the fast-paced environment of motorsport. Efforts to shave fractions of a second off lap times, experiments with innovative, lighter materials and re-designed engines, lead to better and more fuel-efficient production models. Market research suggests that racing raises the perception that a brand is innovative and reliable, ultimately driving increased sales.

Speed is also critical for a web site. According to [research by Google](https://www.thinkwithgoogle.com/intl/en-gb/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/ "Read Think With Google article"), 53% of mobile users will leave a site if it hasn't loaded within three seconds. A slow site means a bad user experience. Google, along with other search engine providers, want their search results to link to fast and accessible pages. Good user experience = repeat search engine visitors = higher profits. It is no surprise that their algorithms favour fast sites (and in particular fast mobile sites) in search rankings.

Many tools and tricks have been used to shave fractions of a second off namrider.com page load times. How effective have these efforts been? How does namrider.com perform compared to its peers? If all IAM group websites were entered into a competition, the virtual equivalent of a superbike championship, how would namrider.com rank? What further improvements might be needed to produce a 'turbo-charged' site? What would racing teach us?

## The 'Teams'

If websites were superbikes, the teams would have to be the individual groups that are affliated to IAM Roadsmart. According to the [IAM Roadsmart group directory](https://www.iamroadsmart.com/local-groups "Go to the IAM Roadsmart group directory"), there were 186 groups as of November 2020. As shown in Figure 1, 90 groups are car-only, 61 motorcycle-only and 21 supporting both car drivers and motorcyclists.

The IAM Roadsmart is also included as a team in this competition.

{{< img src="IAM_group_overview.png" caption="Figure 1" alt="Number of IAM RoadSmart car and motorcycle groups, November 2020" lazy="true" class="layout-figure-mt" >}}

## The 'Bikes'

For the purpose of this championship, the bikes will be the homepage of each IAM group website. Most groups have chosen to manage the build of their website themselves. 6 are relying on Facebook and 45 are 'riding pillion' on the IAM Roadsmart machine. (See Figure 1.)

At the heart of every website is a content management system (CMS). These are like the fuel management systems on motorcycles and control which content (text, images, etc.) needs to be delivered to the site visitor by the 'engine' (the computer or server) powering the website.

Analysis of each group website (Figure 2) shows that 12 different CMSs are in use by IAM Roadsmart groups, the most popular of which is a free 'open-source' program called Wordpress. IAM Roadsmart is using Sitefinity&reg; by Progress Software Corporation (which is therefore also powering the groups hosted on the same platform). 53 groups are either using no CMS (building 'static sites') or the site configuration doesn't allow the CMS to be determined.

{{< img src="IAM_group_CMS.png" caption="Figure 2" alt="Chart showing the most popular CMS used by IAM groups, November 2020" lazy="true" class="layout-figure-mt" >}}

Motorcycle designers add many components to a superbike; sensors, controllers and riding aids, etc. To win a competition, the function and value of each component has to be balanced carefully against the additional weight.

Similarly, website designers add software components to the sites that they build. These software libraries and frameworks add functionality to the site, such as an image gallery or video player or allow custom typefaces to be used to add visual interest. These components should also be as light-weight as possible and added only if they play an essential part in helping the visitor to achieve his or her objectives when visiting the site.

For example, namrider.com includes lines of software code to establish each visitor's consent to storing ['cookies'](https://en.wikipedia.org/wiki/HTTP_cookie "Read about cookies on Wikipedia") on their computer or mobile device. Although this code does increase page load times slightly, establishing consent is a [requirement that we're obliged to comply with](https://ico.org.uk/for-organisations/guide-to-pecr/cookies-and-similar-technologies/ "Read about cookie regulations on the UK Information Commissioner's Office website") and the functionality is therefore considered to be essential. 

Figure 3 summarises all the different software components across all IAM group websites. These will all have an impact on site speed. 60 groups have 3 libraries installed on their homepage. One site was found to have 5 different JavaScript libraries installed.

{{< img src="IAM_group_build_components.png" caption="Figure 3" alt="Charts showing the popularity of compenents used to build IAM group websites" lazy="true" class="layout-figure-mt" >}}

## Speed Trials

[Mobile speed is critical](https://www.thinkwithgoogle.com/intl/en-gb/marketing-strategies/app-and-mobile/milliseconds-earn-millions-why-mobile-speed-can-slow-or-grow-your-business/ "Read Think With Google article") to the success of any site. Motorcyclists now have more ways than ever to browse, search and shop whilst out and about. Over two thirds of visits to namrider.com are now from visitors using mobile devices. No matter how well we may deliver IAM Roadsmart courses, a slow mobile experience may mean that we drive new riders away and frustrate existing members.



{{< img src="IAM_group_lighthouse_performance.png" alt="Comparison of median desktop and mobile performance scores of IAM group websites" lazy="true" class="layout-figure-mt" >}}

{{< img src="IAM_group_lighthouse_performance_CMS.png" alt="Comparison of median desktop and mobile performance scores of IAM group websites" lazy="true" class="layout-figure-mt" >}}

### The two-second rule

If Google state that 'No matter what, faster is better and less is more' we'd better take note.

Lighthouse and PageSpeed assign an overall performance score to a page, which is useful when tying to comparing different pages. However, these scores are actually based on a number of different measurements. From the perspective of a site visitor, several events are important:

- First Contentful Paint (FCP) or 'Is anything happening yet?'
- First Meaningful Paint or 'Can I see anything useful yet?'
- Time To Interactive or 'Can I do what I want to do yet?'

#### Desktop PageSpeed Tests

{{< img src="IAM_group_speed_dumbell_plot_desktop.png" alt="Plot of differences in desktop page load times" lazy="true" class="layout-figure-mt" >}}

#### Mobile PageSpeed Tests

{{< img src="IAM_group_speed_dumbell_plot_mobile.png" alt="Plot of differences in mobile page load times" lazy="true" class="layout-figure-mt" >}}

{{< img src="IAM_group_speed_insight_mobile.png" alt="Plot of metrics used to calculate mobile page speed scores" lazy="true" class="layout-figure-mt" >}}

{{< img src="IAM_group_speed_insight_page_size.png" alt="Box plot showing total page size and page speed rating" lazy="true" class="layout-figure-mt" >}}

{{< group-websites/table-group-pingdom-sizes >}}

{{< img src="IAM_group_speed_lighthouse_vs_insight_mobile_CDN_CMS.png" alt="Plot showing correlation between CMS and mobile page speed scores" lazy="true" class="layout-figure-mt" >}}

## The 'Championships'

### Regulations

Teams entering the Superbike World Championship have to comply with technical regulations set by the competition's governing body. These regulations have evolved to ensure a meaningful competition that cannot be dominated year after year by a single manufacturer. They set weight limits and engine rev limits, restrict aerodynamic aids and electronics and specify the use of control tyres.

For this first championship, no restrictions have been applied on IAM Group websites. Arguably, sites should be disqualified if they do not meet the following standards:

- valid security certificate
- effective cookie policy

Sites which do not allow a visitor to change cookie preferences will have a small small performance advantage over those which do. (As in a superbike competition, millisecond differences are important when trying to out-rank competitors!)

### Scoring system

There are a number of different tools for measuring the performance of a website. (Those regularly used during the development of namrider.com include Google PageSpeed Insights, Google Lighthouse, Google Search Console, GTMetrix, Pingdom, YSlow). Like the diagnostic tools available to a motorcycle mechanic, these allow a developer to fine-tune those aspects of a website which will affect the visitor's experience:

Performance
: How quickly can users see and interact with the contents of a web page?

Accessibility
: How easy is it for all users to navigate and read a web page?

Best practices
: How well does a web page adhere to current best practices (security, user experience)?

Search Engine Optimisation (SEO)
: How well is a web page optimised to ensure that it can rank well in search engine results?


Using Google Lighthouse, mobile and desktop versions of group homepages were each audited five times under the same conditions (browser and network speed). This produces a championship based on five 'laps' of each of the following eight 'races':

- mobile performance (speed) (MP)
- mobile accessibility (MA)
- mobile best practices (MB)
- mobile search engine optimisation (MS)
- desktop performance (speed) (DP)
- desktop accessibility (DA)
- desktop best practices (DB)
- desktop search engine optimisation (DS)

Each website was then ranked based on its median score for each 'race' and points awarded using the [Superbike World Championship](https://en.wikipedia.org/wiki/Superbike_World_Championship "Go to Superbike World Championship wikipedia page") scoring system: 

<table class="">
<caption><b>Superbike World Championship points system</b>
</caption>
<tbody>
    <tr>
        <th>Rank</th>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
        <th>5</th>
        <th>6</th>
        <th>7</th>
        <th>8</th>
        <th>9</th>
        <th>10</th>
        <th>11</th>
        <th>12</th>
        <th>13</th>
        <th>14</th>
        <th>15</th>
    </tr>
    <tr>
    <th>Points awarded</th>
        <td>25</td>
        <td>20</td>
        <td>16</td>
        <td>13</td>
        <td>11</td>
        <td>10</td>
        <td>9</td>
        <td>8</td>
        <td>7</td>
        <td>6</td>
        <td>5</td>
        <td>4</td>
        <td>3</td>
        <td>2</td>
        <td>1</td>
    </tr>
</tbody></table>

These 'races' only test the performance of the homepage of each group website. (Any systemic problems are likely to affect other pages on a site.) It is important to stress that results do not indicate the 'quality' of a given site or how effectively it achieves the goals of each group. 

## The Results

The following table shows the total 'superbike' score achieved by each site across all eight tests. Median score and ranking in each test are also shown. 



{{< group-websites/table-group-scores >}}

{{< img src="IAM_group_distribution_of_median_lighthouse_performance_scores.png" alt="Distribution of IAM Roadsmart group website Lighthouse scores, November 2020" lazy="true" class="layout-figure-mt" >}}

## Backlinks

{{< img src="IAM_group_backlinks.png" alt="Plot of backlinks vs webarchive age, November 2020" lazy="true" class="layout-figure-mt" >}}
 


  That isn't to say that images have no place in an IAM group website. However each image should be carefully assessed. Given the impact on page performance, an image should only be included if it is considered critical to the visitor achieving his or her objective.

### Test Conditions

#### User Agent

User Agent
: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/88.0.4324.96 Safari/537.36

#### Environment

Network User Agent
: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4143.7 Safari/537.36 Chrome-Lighthouse
Host User Agent
: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/88.0.4324.96 Safari/537.36
Benchmark Index
: 1812.5

#### Credits

Axe-core
: 3.5.5

Lighthouse Version
: 6.4.1

Fetch Time
: 2021-01-24T17:25:18.542Z