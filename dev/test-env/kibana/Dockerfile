FROM docker.elastic.co/kibana/kibana:9.1.2

COPY ./plugins/elastalertKibanaPlugin-9.1.2.zip plugins/
RUN ./bin/kibana-plugin install file:////usr/share/kibana/plugins/elastalertKibanaPlugin-9.1.2.zip
