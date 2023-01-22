## このリポジトリについて

Drupal で TailwindCSS を用いた開発ができます。

## 初期設定

```bash
git clone https://github.com/t-nakai10/Drupal-TailwindCSS.git
cd Drupal-TailwindCSS

# DDEV 立ち上げ.
ddev start

# Drupalのファイル群をインストール.
ddev composer install
```

- https://drupal-project.ddev.site に遷移し Drupal をインストールします。
- Drupal のインストールが終われば、テーマから `tw` テーマを有効化してください。

## キャッシュの無効化

- `example.settings.local.php` を app > sites > default 下に `settings.local.php` にリネームして配置してください。
- Twig のキャッシュは app > sites > development.services.yml に設定を直接記入し、無効化済みです。
  - 詳しくは https://www.studio-umi.jp/blog/6/345 等を参考ください。

## gulp の設定

```bash
# ファイル群のインストール.
ddev exec yarn

# gulp 実行.
ddev exec gulp
```

- gulp のプロキシサーバーは https://drupal-project.ddev.site:3000/ になります。

## 主に使用するコマンド

- DDEV を実行

```bash
ddev start
```

- gulp を実行

```bash
ddev exec gulp
```

- web ディレクトリ再生成

  - drupal paranoia を使用しているため必要に応じて下記コマンドを実行してください。

```bash
composer drupal:paranoia
```

## 補足

- https://github.com/studioumi/drupal-project のリポジトリをベースに変更を加えました。
- Docker や DDEV のインストールがまだの方は https://ddev.readthedocs.io/en/stable/#manual から準備してください。
