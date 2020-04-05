FROM alpine:3.4

RUN apk add --no-cache \
# openssh=7.2_p2-r1 \
  openssh \
# git=2.8.3-r0
  git

RUN ssh-keygen -A

RUN mkdir /group/

RUN chmod 777 group

WORKDIR /git-server/

RUN mkdir /git-server/keys \
  && adduser -D -s /usr/bin/git-shell git \
  && echo git:12345 | chpasswd \
  && mkdir /home/git/.ssh \
  && chmod o+x /home/ \
  && chmod o+r /home/ \ 
  && chmod o+w /home/

COPY git-shell-commands /home/git/git-shell-commands

COPY sshd_config /etc/ssh/sshd_config
COPY start.sh start.sh

EXPOSE 22

CMD ["sh", "start.sh"]
