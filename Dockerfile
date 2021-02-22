FROM node:14.15.5-alpine

COPY ./wztest /wztest

RUN cd /wztest && npm install