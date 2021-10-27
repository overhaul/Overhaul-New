<p align="center">
  OVERHAUL 2021
</p>
<h1 align="center">
  GatsbyStarter as a Base for OverhaulMedia 2021
</h1>

## Get it running locally/ Quick start

1.  **Download Repo**

    You found it, now download it.

2.  **Start developing.**

    Navigate into the site’s local directory and start it up.

    ```shell
    cd this-site/
    npm run develop
    ```

3.  **Open the code and start editing!**

    The site is now running at http://localhost:8000!


## 🚀 Overhaul Stuff

The site is pulling data from a Wordpress install at cms.overhaulmedia.com. Edits made there are detected by Gatsby and deployed.
There are a few 'hardcoded' pages that can't be overwritten from Wordpress: 
 - Work
 - About
 - Home
 - Careers
 - Contact
 
 All other pages are editable via the content editor in Wordpress (Gutenberg). 

 Work posts are added via the 'Post' post type. The categories for filtering are pulled from Wordpress as well.
 There is a content Block called 'Sections' used to add the PageHero, PageTitle, FullWidhtImage and DualIamges components to the post. If these are uninspiring, go nuts with the Gutenberg blocks.
