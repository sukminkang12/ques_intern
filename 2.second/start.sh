#!/bin/sh

if [ "$(ls -A /git-server/keys/)" ]; then
            cd /home/
            cat /git-server/keys/*.pub >> .ssh/authorized_keys
            chown -R git:git .ssh
            chmod 700 .ssh
            chmod -R 600 .ssh/*
fi

if [ "$(ls -A /git-server/repos/)" ]; then
	cd /git-server/repos
	chown -R git:git .
	chmod -R ug+rwX .
	find . -type d -exec chmod g+s '{}' +
fi


/usr/sbin/sshd -D
