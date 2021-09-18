![daft_small](https://figmage.com/images/IPdWAod-s1xzh1NEJAZSF.png)

## D(A)FT

**Damn (Awesome) Frontend Tooling**

### Install

```sh
npm install @reloaddk/daft --save-dev
```

The above package contains everything you would need to have your frontend up
and running.

### Configuration

Take a look in `/packages/daft/config`. These are example configs that provides
a good starting point but might as well be used as is.

Copy them into your own project. In root or at custom theme level dependant upon
your setup.

#### SASS

During development if you aren't able to have SASS changes trigger, remember to
add `--poll` to your watch script as seen in `example/package.json`, `css:watch`
command.

### [Example](https://daft.reload.dk/)

An example app is provided in `/packages/example`
and is shown at [https://daft.reload.dk/](https://daft.reload.dk/).
