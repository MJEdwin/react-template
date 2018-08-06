# webpack react template #
## what is this repository can do ##

It's a simple react template like create-react-app but use webpack to pack you web code. 

## webpack config ##
1. resourse analysis loader

    * url-loader-use dataUrl while resourse volume less than 8192kb

2. css analysis loader
    
    * postcss-loader autoprefixer
    * css-loader
    * style-loader

3. javascript(js&jsx) analysis loader

    * babel-loader-use prest env, react and stage-0

4. plugins

    * HtmlWebpackPlugin to generate html of react app
    * HotModuleReplacementPlugin to implement webpack devServer host replace

## how to use ##
```bash
 git clone https://github.com/MJEdwin/react-templete.git
 cd react-templete
 npm update
 npm run debug //run debug env
 npm run release // run release env
```

