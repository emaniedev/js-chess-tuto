FROM node:21

WORKDIR /root/js-chess-tuto

VOLUME /root/js-chess-tuto

CMD ["node", "./index.js"]