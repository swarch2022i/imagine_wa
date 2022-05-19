FROM node:lts

# create destination directory
RUN mkdir -p /usr/src/imagine_wa
WORKDIR /usr/src/imagine_wa

# copy the app, note .dockerignore
COPY . /usr/src/imagine_wa/
RUN npm install

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN npm run build

# expose 5000 on container
EXPOSE 4500

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=4500

# start the app
CMD [ "npm", "run", "dev" ]